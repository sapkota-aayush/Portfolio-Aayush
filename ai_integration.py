import os
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

def generate_response_with_memory(query, search_results):
    """Generate AI response with conversational memory"""
    # Load prompt from file
    with open("prompt.txt", "r") as f:
        system_prompt = f.read()
    
    # Prepare context from search results
    context = ""
    for match in search_results.matches:
        context += f"{match.metadata['chunk_text']}\n"
    
    # Create enhanced prompt with context
    enhanced_input = f"{system_prompt}\n\nContext from database: {context}\n\nUser question: {query}"
    
    # Use LangChain with memory
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
