# Aayush Sapkota's Portfolio

An AI-powered portfolio website featuring intelligent chat integration and modern design.

## Features

- **AI Chat Integration**: Interactive chat powered by OpenAI GPT-4 with RAG (Retrieval Augmented Generation)
- **Vector Database**: Pinecone integration for intelligent content retrieval
- **Contact Automation**: Automated email sending via SMTP
- **Responsive Design**: Optimized for mobile and desktop
- **Modern Tech Stack**: React, FastAPI, TypeScript, Tailwind CSS

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for fast development
- Tailwind CSS for styling
- shadcn/ui components

### Backend
- FastAPI (Python)
- OpenAI GPT-4
- LangChain for AI workflows
- Pinecone vector database
- SMTP for email automation

## Quick Start

### Backend Setup
```bash
# Install Python dependencies
pip install -r requirements.txt

# Set up environment variables
cp .env.example .env
# Edit .env with your API keys

# Upload data to Pinecone
python upload-data.py

# Start the backend server
uvicorn api:app --host 0.0.0.0 --port 8000
```

### Frontend Setup
```bash
cd frontend

# Install dependencies
npm install

# Create environment file
echo "VITE_API_URL=http://localhost:8000" > .env

# Start development server
npm run dev
```

## Environment Variables

### Backend (.env)
```env
OPENAI_API_KEY=your_openai_api_key
PINECONE_API_KEY=your_pinecone_api_key
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
RECIPIENT_EMAIL=your_email@gmail.com
```

### Frontend (frontend/.env)
```env
VITE_API_URL=https://your-backend-url.com
```

## Deployment

1. Deploy backend to your preferred hosting service
2. Update `VITE_API_URL` in frontend/.env
3. Build and deploy frontend:
   ```bash
   cd frontend
   npm run build
   # Deploy dist folder to your hosting service
   ```

## AI Features

- **Intelligent Q&A**: Answers questions about background, experience, and projects
- **Unknown Question Handling**: Automatically emails unknown questions for future addition
- **Contact Automation**: Function calling for automated contact form handling
- **Context Awareness**: Maintains conversation history for better responses

## Project Structure

```
Portfolio-Aayush/
├── frontend/                 # React frontend
│   ├── src/components/      # UI components
│   ├── src/pages/          # Page components
│   ├── src/lib/            # Utilities and constants
│   └── public/             # Static assets
├── ai_integration.py        # AI chat backend
├── pinecone_data.py         # Vector database data
├── api.py                   # FastAPI endpoints
└── requirements.txt         # Python dependencies
```

## Contact

- **Email**: aayush@aayussh.com
- **LinkedIn**: [aayush-sapkota](https://www.linkedin.com/in/aayush-sapkota/)
- **GitHub**: [sapkota-aayush](https://github.com/sapkota-aayush)

---

**Built with ❤️ by Aayush Sapkota**