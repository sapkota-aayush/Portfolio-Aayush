import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send, Bot, User } from "lucide-react";
import { chatApi, handleApiError } from "@/lib/api";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Aayush's AI assistant. I have access to detailed information about his portfolio, projects, experience, and skills. Ask me anything!",
      sender: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isConnected, setIsConnected] = useState<boolean | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Check connection status on component mount
  useEffect(() => {
    const checkConnection = async () => {
      const connected = await chatApi.healthCheck();
      setIsConnected(connected);
    };
    checkConnection();
  }, []);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputText;
    setInputText("");
    setIsLoading(true);

    try {
      // Call the real AI API
      const aiResponse = await chatApi.sendMessage(currentInput);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        sender: 'assistant',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      // Handle API errors gracefully
      const errorMessage = handleApiError(error);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: errorMessage,
        sender: 'assistant',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Card className="h-full flex flex-col border-chat-border bg-chat-background shadow-large backdrop-blur-sm bg-white/95">
      <div className="p-4 lg:p-6 border-b border-chat-border bg-gradient-subtle">
        <div className="flex items-center gap-3">
          <Bot className="w-5 h-5 lg:w-6 lg:h-6 text-muted-foreground" />
          <h3 className="font-medium text-foreground text-base lg:text-lg">Aayush Sapkota</h3>
          <div className="flex items-center gap-2 ml-auto">
            <div className={`w-2 h-2 rounded-full ${
              isConnected === null 
                ? 'bg-yellow-500 animate-pulse' 
                : isConnected 
                ? 'bg-green-500' 
                : 'bg-red-500'
            }`}></div>
            <span className="text-xs text-muted-foreground">
              {isConnected === null 
                ? 'Connecting...' 
                : isConnected 
                ? 'AI Connected' 
                : 'AI Offline'}
            </span>
          </div>
        </div>
        <p className="text-sm lg:text-base text-muted-foreground mt-2">
          {isConnected 
            ? "This is virtual me - ask me anything!" 
            : "AI assistant is currently offline. Some features may be limited."}
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-4 lg:space-y-6">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {message.sender === 'assistant' && (
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 lg:w-5 lg:h-5 text-accent-foreground" />
              </div>
            )}
            
            <div
              className={`max-w-[85%] sm:max-w-[80%] px-4 py-3 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-accent text-accent-foreground'
              }`}
            >
              <p className="text-sm lg:text-base leading-relaxed">{message.text}</p>
            </div>

            {message.sender === 'user' && (
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <User className="w-4 h-4 lg:w-5 lg:h-5 text-primary-foreground" />
              </div>
            )}
          </div>
        ))}
        
        {isLoading && (
          <div className="flex gap-3 justify-start">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
              <Bot className="w-4 h-4 lg:w-5 lg:h-5 text-accent-foreground" />
            </div>
            <div className="bg-accent px-4 py-3 rounded-lg">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 lg:p-6 border-t border-chat-border bg-gradient-subtle">
        <div className="flex gap-3">
          <Input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me about this portfolio..."
            className="flex-1 bg-background text-sm lg:text-base"
            disabled={isLoading}
          />
          <Button
            onClick={handleSendMessage}
            disabled={isLoading || !inputText.trim()}
            size="icon"
            className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12"
          >
            <Send className="w-4 h-4 lg:w-5 lg:h-5" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ChatInterface;