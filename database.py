import os
from pinecone import Pinecone, ServerlessSpec
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Initialize a Pinecone client with your API key
pc = Pinecone(api_key=os.getenv("PINECONE_API_KEY"))

# Create a regular index (we'll add embeddings manually)
index_name = "aayush-portfolio"
if not pc.has_index(index_name):
    pc.create_index(
        name=index_name,
        dimension=3072,  # text-embedding-3-large dimension
        metric="cosine",
        spec=ServerlessSpec(
            cloud="aws",
            region="us-east-1"
        )
    )
    print(f"Index '{index_name}' created successfully!")
else:
    print(f"Index '{index_name}' already exists!")

# Get the index
index = pc.Index(index_name)
print(f"Connected to index: {index_name}")
