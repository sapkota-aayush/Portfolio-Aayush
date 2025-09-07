// API integration for connecting frontend to AI backend

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'; // FastAPI backend URL

export interface ChatRequest {
  message: string;
}

export interface ChatResponse {
  message: string;
}

export class ApiError extends Error {
  constructor(
    message: string,
    public status?: number,
    public statusText?: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export const chatApi = {
  async sendMessage(message: string): Promise<string> {
    try {
      const response = await fetch(`${API_BASE_URL}/chat/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new ApiError(
          `HTTP error! status: ${response.status}`,
          response.status,
          response.statusText
        );
      }

      const data: ChatResponse = await response.json();
      return data.message;
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      
      // Network or other errors
      throw new ApiError(
        `Failed to send message: ${error instanceof Error ? error.message : 'Unknown error'}`
      );
    }
  },

  // Health check to verify backend connection
  async healthCheck(): Promise<boolean> {
    try {
      const response = await fetch(`${API_BASE_URL}/docs`, {
        method: 'GET',
      });
      return response.ok;
    } catch {
      return false;
    }
  }
};

// Utility function to handle API errors gracefully
export const handleApiError = (error: unknown): string => {
  if (error instanceof ApiError) {
    if (error.status === 500) {
      return "Sorry, there's an issue with the AI service. Please try again later.";
    } else if (error.status === 404) {
      return "The chat service is currently unavailable. Please check if the backend is running.";
    } else {
      return `Error: ${error.message}`;
    }
  }
  
  return "Sorry, I'm having trouble connecting to the AI service. Please try again later.";
};
