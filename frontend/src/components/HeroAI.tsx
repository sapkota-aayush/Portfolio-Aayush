import React, { useState, useEffect } from 'react';
import './HeroAI.css';

interface HeroAIProps {
  onChatOpen: () => void;
}

const HeroAI: React.FC<HeroAIProps> = ({ onChatOpen }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPrompt, setCurrentPrompt] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const prompts = [
    "Hi there! I'm here to chat about my projects, experience, or skills.",
    "This isn't just a portfolio - it's interactive. Try asking me anything!",
    "Want to know about my coding journey? I have all the details.",
    "Curious about my tech stack or recent projects? Let's talk!"
  ];

  useEffect(() => {
    // Show component after a short delay
    const showTimer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    // Cycle through prompts
    const interval = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setCurrentPrompt((prev) => (prev + 1) % prompts.length);
        setIsTyping(false);
      }, 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, [prompts.length]);

  const handleClick = () => {
    onChatOpen();
  };

  return (
    <div className={`hero-ai ${isVisible ? 'visible' : ''}`}>
      <div className="ai-header">
        <div className="character-section">
          <div className="animated-character">
            <div className="character-head">
              <div className="character-eyes">
                <div className="eye"></div>
                <div className="eye"></div>
              </div>
              <div className="character-mouth"></div>
            </div>
            <div className="character-body">
              <div className="character-details">
                <div className="detail detail-1"></div>
                <div className="detail detail-2"></div>
                <div className="detail detail-3"></div>
              </div>
            </div>
          </div>
        </div>
        
        <h3 className="ai-title">Let's Chat!</h3>
        <p className="ai-description">This isn't just a traditional portfolio. You can actually talk to me and ask questions about my work, experience, and projects.</p>
      </div>
      
      {/* Simple Chat Box */}
      <div className="simple-chat-box" onClick={handleClick}>
        <div className="chat-preview">
          <div className="ai-message-preview">
            <div className="message-avatar">🤖</div>
            <div className="message-text">
              {isTyping ? (
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              ) : (
                prompts[currentPrompt]
              )}
            </div>
          </div>
        </div>
        
        <div className="chat-input-area">
          <input 
            type="text" 
            placeholder="Ask me anything about my work..."
            className="chat-input-field"
            onClick={handleClick}
            readOnly
          />
          <button className="chat-send-btn" onClick={handleClick}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroAI;
