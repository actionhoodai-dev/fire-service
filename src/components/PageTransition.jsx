import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ 
        duration: 0.4, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      style={{ width: '100%' }}
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
          height: '4px',
          background: 'linear-gradient(90deg, #ff4d00, #ffc400, #ff4d00)',
          zIndex: 9999,
          transformOrigin: 'left'
        }}
      />
      {children}
    </motion.div>
  );
};

export default PageTransition;
