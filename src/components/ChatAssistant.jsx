import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, MessageSquareQuote, Bot } from 'lucide-react';

const ChatAssistant = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');

  const handleSendToWhatsApp = (e) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;
    const phone = "919944677149";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent("Question: " + chatMessage)}`;
    window.open(url, '_blank');
    setChatMessage('');
    setIsChatOpen(false);
  };

  return (
    <div className="chat-assistant-container" style={{ position: 'fixed', bottom: '40px', left: '40px', zIndex: 1000, display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'flex-start' }}>
      
      {/* Chat Box */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 50, transformOrigin: 'bottom left' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="chat-box glass-card"
            style={{ 
              width: '320px', 
              padding: '20px', 
              marginBottom: '10px',
              border: '1px solid var(--primary)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
              background: 'white'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
              <h4 style={{ margin: 0, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Bot size={18} className="accent-text" /> Safety AI
              </h4>
              <button 
                onClick={() => setIsChatOpen(false)} 
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
              >
                <X size={20} />
              </button>
            </div>
            
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '15px' }}>
              Need urgent help or have a technical query? Drop a message and we'll assist you on WhatsApp immediately.
            </p>
            
            <form onSubmit={handleSendToWhatsApp}>
              <textarea 
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Type your question here..."
                style={{ 
                  width: '100%', 
                  height: '100px', 
                  padding: '12px', 
                  borderRadius: '10px', 
                  border: '1px solid #eee', 
                  background: '#f9f9f9',
                  fontFamily: 'inherit',
                  fontSize: '0.9rem',
                  resize: 'none',
                  marginBottom: '10px',
                  display: 'block'
                }}
              />
              <button 
                type="submit" 
                className="btn-primary" 
                style={{ width: '100%', justifyContent: 'center', gap: '8px' }}
              >
                Let's Chat <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Toggle Button */}
      <motion.button 
        onClick={() => setIsChatOpen(!isChatOpen)}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="floating-btn chat-toggle-btn"
        style={{ 
          width: '60px', 
          height: '60px', 
          borderRadius: '50%', 
          background: 'var(--primary)', 
          color: 'white', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          boxShadow: '0 8px 16px rgba(255, 0, 0, 0.4)',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        {isChatOpen ? <X size={28} /> : <MessageSquareQuote size={28} />}
      </motion.button>
    </div>
  );
};

export default ChatAssistant;
