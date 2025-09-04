import React, { useState } from 'react';
import '../assets/styles/ChatBot.css';

interface Message {
  text: string;
  sender: 'user' | 'ai';
}

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi! I'm Aayush. Ask me anything about my work, projects, or experience!", sender: 'ai' }
  ]);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = { text: inputMessage, sender: 'user' };
    const messageToSend = inputMessage;
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      const response = await fetch('http://localhost:8000/chat/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: messageToSend }),
      });
      const data = await response.json();
      setIsTyping(false);
      setMessages(prev => [...prev, { text: data.message, sender: 'ai' }]);
    } catch (error) {
      setIsTyping(false);
      setMessages(prev => [...prev, { text: 'Sorry, I encountered an error. Please try again.', sender: 'ai' }]);
    }
  };

  return (
    <div className="simple-chat-container">
      <div className="chat-header">
        <h3>💬 Chat with me</h3>
        <p>Ask me anything about my work and experience</p>
      </div>
      
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <div className="message-content">
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="message ai typing-message">
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
      </div>
      
      <div className="chat-input">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Type your question here..."
        />
        <button onClick={sendMessage} disabled={!inputMessage.trim()}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
