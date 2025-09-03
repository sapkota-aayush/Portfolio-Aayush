from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from ai_integration import search_portfolio, generate_response_with_memory
app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message:str

class ChatResponse(BaseModel):
    message:str

@app.post("/chat/")
def char(request:ChatRequest):
    try:
        search_results=search_portfolio(request.message)
        ai_response=generate_response_with_memory(request.message,search_results)
        return ChatResponse(message=ai_response)
    except Exception as e:
        return ChatResponse(message=f"Error: {str(e)}")
 
