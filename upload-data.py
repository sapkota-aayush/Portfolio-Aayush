import os
from pinecone import Pinecone
from openai import OpenAI
from dotenv import load_dotenv
from pinecone_data import records

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

def upload_data():
    """Upload portfolio data to Pinecone"""
    vectors_to_upload = []
    
    for record in records:
        # Get embedding for the chunk text
        embedding = get_embedding(record["chunk_text"])
        
        # Prepare vector for upload
        vector = {
            "id": record["_id"],
            "values": embedding,
            "metadata": {
                "chunk_text": record["chunk_text"],
                "category": record["category"]
            }
        }
        vectors_to_upload.append(vector)
    
    # Upload in batches
    batch_size = 100
    for i in range(0, len(vectors_to_upload), batch_size):
        batch = vectors_to_upload[i:i + batch_size]
        index.upsert(vectors=batch)
        print(f"Uploaded batch {i//batch_size + 1}/{(len(vectors_to_upload) + batch_size - 1)//batch_size}")
    
    print(f"Successfully uploaded {len(records)} records to Pinecone!")

if __name__ == "__main__":
    upload_data()
