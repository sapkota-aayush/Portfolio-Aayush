# AI Chat Integration Guide

## Overview
This document explains how the AI chat system is integrated between the FastAPI backend and React frontend.

## Architecture

### Backend (Python/FastAPI)
- **`api.py`**: FastAPI server with `/chat/` endpoint
- **`ai_integration.py`**: AI logic with Pinecone search and OpenAI GPT-4
- **`database.py`**: Database utilities (if needed)
- **`prompt.txt`**: System prompt for the AI assistant

### Frontend (React/TypeScript)
- **`frontend/src/lib/api.ts`**: API integration layer
- **`frontend/src/components/ChatInterface.tsx`**: Main chat component
- **`frontend/src/components/ChatSection.tsx`**: Chat section wrapper

## API Integration

### Backend API Endpoint
```
POST /chat/
Content-Type: application/json

{
  "message": "What is Aayush's experience with Python?"
}
```

**Response:**
```json
{
  "message": "Aayush has extensive experience with Python as his primary programming language..."
}
```

### Frontend API Integration
The frontend uses the `chatApi` service in `frontend/src/lib/api.ts`:

```typescript
import { chatApi } from '@/lib/api';

// Send a message to the AI
const response = await chatApi.sendMessage("Your question here");
```

## Features

### Real-time Chat
- ✅ Real AI responses from OpenAI GPT-4
- ✅ Portfolio data search using Pinecone vector database
- ✅ Conversational memory using LangChain
- ✅ Connection status indicator
- ✅ Error handling and graceful fallbacks

### User Experience
- ✅ Loading states with animated dots
- ✅ Message history persistence during session
- ✅ Auto-scroll to latest messages
- ✅ Keyboard shortcuts (Enter to send)
- ✅ Responsive design for mobile and desktop

## Getting Started

### Option 1: Use the Development Script
```bash
python start_dev.py
```

This will:
1. Check and install dependencies
2. Start the FastAPI backend on port 8000
3. Start the React frontend on port 5173

### Option 2: Manual Setup

#### Backend
```bash
# Install Python dependencies
pip install fastapi uvicorn openai pinecone-client langchain python-dotenv

# Start the backend
uvicorn api:app --reload --host 0.0.0.0 --port 8000
```

#### Frontend
```bash
cd frontend

# Install dependencies
npm install

# Start the frontend
npm run dev
```

## Environment Variables

Make sure you have these environment variables set:

```bash
OPENAI_API_KEY=your_openai_api_key
PINECONE_API_KEY=your_pinecone_api_key
```

## Testing the Integration

1. Start both servers using the development script
2. Open http://localhost:5173 in your browser
3. Navigate to the AI Chat section
4. Check that the connection status shows "AI Connected" (green dot)
5. Ask a question about Aayush's portfolio
6. Verify you get a real AI response

## Troubleshooting

### Backend Issues
- Check that all Python dependencies are installed
- Verify environment variables are set correctly
- Ensure Pinecone index "aayush-portfolio" exists
- Check FastAPI logs for errors

### Frontend Issues
- Check browser console for API errors
- Verify the backend is running on port 8000
- Check network tab for failed requests
- Ensure CORS is properly configured

### Connection Issues
- The chat interface shows connection status
- Red dot = Backend offline
- Yellow dot = Connecting
- Green dot = Connected and ready

## API Error Handling

The frontend gracefully handles various error scenarios:

- **Network errors**: Shows user-friendly offline message
- **Server errors (500)**: Shows generic error message
- **Not found (404)**: Indicates service unavailable
- **Timeout errors**: Shows retry suggestion

## Development Notes

- The backend uses CORS middleware to allow frontend connections
- All origins are allowed for development (configure for production)
- The chat maintains conversation memory across messages
- Vector search is performed for each query to get relevant context
