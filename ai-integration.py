import os
from pinecone import Pinecone
from openai import OpenAI
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Initialize clients
pc = Pinecone(api_key=os.getenv("PINECONE_API_KEY"))
openai_client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

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

def generate_response(query, search_results):
    """Generate AI response based on search results"""
    # Load prompt from file
    with open("prompt.txt", "r") as f:
        system_prompt = f.read()
    
    # Prepare context from search results
    context = ""
    for match in search_results.matches:
        context += f"{match.metadata['chunk_text']}\n"
    
    # Generate response using OpenAI
    response = openai_client.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": f"Question: {query}\n\nContext: {context}\n\nAnswer:"}
        ],
        max_tokens=300
    )
    
    return response.choices[0].message.content

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
            
            # Generate response
            response = generate_response(query, search_results)
            
            print(f"AI: {response}\n")
            
        except Exception as e:
            print(f"Error: {e}\n")

if __name__ == "__main__":
    main()
