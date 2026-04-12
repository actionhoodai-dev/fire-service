import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 1.02, y: -10 }}
      transition={{ 
        duration: 0.5, 
        ease: [0.4, 0, 0.2, 1] 
      }}
      style={{ width: '100%', minHeight: '100vh' }}
    >
      {/* Decorative Fire Wipe Bar */}
      <motion.div
        className="fire-wipe-bar"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: [0, 1, 0] }}
        transition={{ duration: 0.6, times: [0, 0.5, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '5px',
          background: 'linear-gradient(90deg, #ff0000 0%, #ffcc00 50%, #ff0000 100%)',
          zIndex: 9999,
          boxShadow: '0 0 15px rgba(255, 0, 0, 0.6)',
          transformOrigin: 'left'
        }}
      />
      {children}
    </motion.div>
  );
};

export default PageTransition;
