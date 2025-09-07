from fastapi import FastAPI, Request
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from ai_integration import search_portfolio, generate_response_with_memory
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded

app = FastAPI()

# Initialize rate limiter
limiter = Limiter(key_func=get_remote_address)
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=False,  # Must be False when allow_origins=["*"]
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message:str

class ChatResponse(BaseModel):
    message:str

@app.get("/")
def health_check():
    return {"status": "ok", "message": "Portfolio AI Backend is running!"}

@app.post("/chat/")
@limiter.limit("10/day")  # Allow 10 questions per day per IP address
def chat(request: Request, chat_request: ChatRequest):
    try:
        # Get client IP for function calling
        client_ip = request.client.host
        
        search_results = search_portfolio(chat_request.message)
        ai_response = generate_response_with_memory(chat_request.message, search_results, client_ip)
        return ChatResponse(message=ai_response)
    except Exception as e:
        return ChatResponse(message=f"Error: {str(e)}")

# Custom rate limit exceeded handler for better user experience
@app.exception_handler(RateLimitExceeded)
async def rate_limit_handler(request: Request, exc: RateLimitExceeded):
    return ChatResponse(
        message="Sorry! You've reached the daily limit of 10 questions. Please come back tomorrow to ask more questions about Aayush's portfolio!"
    )
