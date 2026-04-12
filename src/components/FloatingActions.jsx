import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Send, X, MessageSquare } from 'lucide-react';

const FloatingActions = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');

  const handleSendToWhatsApp = (e) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;
    const phone = "919944677149";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(chatMessage)}`;
    window.open(url, '_blank');
    setChatMessage('');
    setIsChatOpen(false);
  };

  return (
    <div className="floating-actions-container" style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 1000, display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'flex-end' }}>
      
      {/* Chat Box */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 50, transformOrigin: 'bottom right' }}
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
                <MessageSquare size={18} className="accent-text" /> Safety Assistant
              </h4>
              <button 
                onClick={() => setIsChatOpen(false)} 
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
              >
                <X size={20} />
              </button>
            </div>
            
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '15px' }}>
              Have questions about fire safety? Type your message below and we'll reply instantly on WhatsApp.
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
                Send Message <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {/* Call Button */}
        <motion.a 
          href="tel:919944677149"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="floating-btn call-btn"
          style={{ 
            width: '60px', 
            height: '60px', 
            borderRadius: '50%', 
            background: 'var(--primary)', 
            color: 'white', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            boxShadow: '0 8px 16px rgba(204, 0, 0, 0.3)',
            textDecoration: 'none'
          }}
        >
          <Phone size={24} />
        </motion.a>

        {/* Chat Toggle / WhatsApp */}
        <motion.button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="floating-btn whatsapp-btn"
          style={{ 
            width: '60px', 
            height: '60px', 
            borderRadius: '50%', 
            background: '#25d366', 
            color: 'white', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            boxShadow: '0 8px 16px rgba(37, 211, 102, 0.3)',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          {isChatOpen ? <X size={28} /> : <MessageCircle size={28} />}
        </motion.button>
      </div>
    </div>
  );
};

export default FloatingActions;
