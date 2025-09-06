import os
import smtplib
import json
from datetime import datetime
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from pinecone import Pinecone
from openai import OpenAI
from dotenv import load_dotenv
from langchain.memory import ConversationBufferMemory
from langchain.chains import ConversationChain
from langchain_openai import ChatOpenAI

# Load environment variables
load_dotenv()

# Initialize clients
pc = Pinecone(api_key=os.getenv("PINECONE_API_KEY"))
openai_client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# Initialize LangChain
llm = ChatOpenAI(model="gpt-4", api_key=os.getenv("OPENAI_API_KEY"))
memory = ConversationBufferMemory()
chain = ConversationChain(llm=llm, memory=memory)

# Connect to index
index = pc.Index("aayush-portfolio")

# Email function for function calling
def send_contact_email(user_email: str, user_message: str, user_name: str = "", client_ip: str = "unknown") -> str:
    """Send contact email to Aayush - called by AI when user wants to contact"""
    try:
        # Email configuration from environment variables
        smtp_server = os.getenv("SMTP_SERVER", "smtp.gmail.com")
        smtp_port = int(os.getenv("SMTP_PORT", "587"))
        email_user = os.getenv("EMAIL_USER")
        email_password = os.getenv("EMAIL_PASSWORD")
        recipient_email = os.getenv("RECIPIENT_EMAIL", email_user)
        
        if not email_user or not email_password:
            return "Email service is not configured. Please contact Aayush directly at his email."
        
        # Create message
        msg = MIMEMultipart()
        msg['From'] = email_user
        msg['To'] = recipient_email
        msg['Subject'] = f"Portfolio Contact: {user_name or 'Anonymous'}"
        
        # Email body
        body = f"""
New contact message from your portfolio AI chat:

Name: {user_name or 'Not provided'}
Email: {user_email}
IP Address: {client_ip}
Time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}

Message:
{user_message}

---
This message was sent through your AI portfolio chat system.
        """
        
        msg.attach(MIMEText(body, 'plain'))
        
        # Send email
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(email_user, email_password)
        text = msg.as_string()
        server.sendmail(email_user, recipient_email, text)
        server.quit()
        
        return "Email sent successfully! Aayush will get back to you soon."
    except Exception as e:
        return f"Sorry, there was an issue sending your message: {str(e)}"

# Function calling setup
functions = [
    {
        "name": "send_contact_email",
        "description": "Send an email to Aayush when user wants to contact him",
        "parameters": {
            "type": "object",
            "properties": {
                "user_email": {
                    "type": "string",
                    "description": "The user's email address"
                },
                "user_message": {
                    "type": "string", 
                    "description": "The message the user wants to send"
                },
                "user_name": {
                    "type": "string",
                    "description": "The user's name (optional)"
                }
            },
            "required": ["user_email", "user_message"]
        }
    }
]

def get_embedding(text):
    """Get embedding from OpenAI"""
    response = openai_client.embeddings.create(
        model="text-embedding-3-large",
        input=text
    )
    return response.data[0].embedding

def search_portfolio(query, top_k=20, rerank_top_n=5):
    """Search portfolio data in Pinecone with reranking"""
    # Get embedding for query
    query_embedding = get_embedding(query)
    
    # Search in Pinecone with reranking
    results = index.query(
        vector=query_embedding,
        top_k=top_k,
        include_metadata=True,
        rerank={
            "model": "bge-reranker-v2-m3",
            "top_n": rerank_top_n,
            "rank_fields": ["chunk_text"]
        }
    )
    
    return results

def generate_response_with_memory(query, search_results, client_ip="unknown"):
    """Generate AI response with conversational memory and function calling"""
    # Load prompt from file
    with open("prompt.txt", "r") as f:
        system_prompt = f.read()
    
    # Prepare context from search results
    context = ""
    for match in search_results.matches:
        context += f"{match.metadata['chunk_text']}\n"
    
    # Enhanced system prompt with function calling instructions
    enhanced_system_prompt = f"""{system_prompt}

IMPORTANT: If the user wants to contact Aayush, hire him, work with him, or send him a message, you should:
1. Ask for their email address and message
2. Use the send_contact_email function to send the email
3. Confirm that the email was sent

Context from database: {context}"""
    
    try:
        # Use OpenAI directly for function calling
        messages = [
            {"role": "system", "content": enhanced_system_prompt},
            {"role": "user", "content": query}
        ]
        
        response = openai_client.chat.completions.create(
            model="gpt-4",
            messages=messages,
            functions=functions,
            function_call="auto"
        )
        
        message = response.choices[0].message
        
        # Check if function should be called
        if message.function_call:
            function_name = message.function_call.name
            
            if function_name == "send_contact_email":
                # Parse function arguments
                function_args = json.loads(message.function_call.arguments)
                
                # Call the email function
                email_result = send_contact_email(
                    user_email=function_args["user_email"],
                    user_message=function_args["user_message"],
                    user_name=function_args.get("user_name", ""),
                    client_ip=client_ip
                )
                
                # Get final response from AI
                messages.append({
                    "role": "assistant", 
                    "content": message.content,
                    "function_call": message.function_call
                })
                messages.append({
                    "role": "function",
                    "name": function_name,
                    "content": email_result
                })
                
                final_response = openai_client.chat.completions.create(
                    model="gpt-4",
                    messages=messages
                )
                
                return final_response.choices[0].message.content
        
        return message.content
        
    except Exception as e:
        # Fallback to LangChain if function calling fails
        enhanced_input = f"{enhanced_system_prompt}\n\nUser question: {query}"
        response = chain.predict(input=enhanced_input)
        return response

def main():
    print("AI Portfolio Assistant - Ask me anything about Aayush Sapkota!")
    print("Type 'quit' to exit.\n")
    
    while True:
        query = input("You: ").strip()
        
        if query.lower() in ['quit', 'exit', 'bye']:
            print("Goodbye!")
            break
        
        if not query:
            continue
        
        try:
            # Search portfolio
            search_results = search_portfolio(query)
            
            # Generate response with memory
            response = generate_response_with_memory(query, search_results)
            
            print(f"AI: {response}\n")
            
        except Exception as e:
            print(f"Error: {e}\n")

if __name__ == "__main__":
    main()
