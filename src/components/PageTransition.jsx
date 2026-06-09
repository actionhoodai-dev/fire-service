import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ width: '100%', minHeight: '100vh', position: 'relative' }}
    >
      {/* Page Content Fade In/Out */}
      <motion.div
        variants={{
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -10 }
        }}
        transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
      >
        {children}
      </motion.div>

      {/* Premium Full-Screen White Wipe Overlay with Glowing Logo */}
      <motion.div
        variants={{
          initial: { opacity: 1, pointerEvents: 'auto' },
          animate: { opacity: 0, transitionEnd: { pointerEvents: 'none' } },
          exit: { opacity: 1, pointerEvents: 'auto' }
        }}
        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          background: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999
        }}
      >
        {/* Animated logo & loader container */}
        <motion.div
          variants={{
            initial: { scale: 0.85, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            exit: { scale: 0.85, opacity: 0 }
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          {/* Logo with pulsing glow */}
          <div style={{ position: 'relative', width: '100px', height: '100px', marginBottom: '20px' }}>
            <motion.div
              animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255, 77, 0, 0.4) 0%, rgba(255, 77, 0, 0) 70%)',
                filter: 'blur(12px)'
              }}
            />
            <img 
              src="/logo.png" 
              alt="VV Safety Logo" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'contain',
                borderRadius: '50%',
                boxShadow: '0 8px 24px rgba(255, 77, 0, 0.15)',
                border: '2px solid #ff4d00',
                background: '#ffffff'
              }} 
            />
          </div>

          {/* Loading bar */}
          <div style={{ width: '120px', height: '3px', background: '#e0e0e0', borderRadius: '3px', overflow: 'hidden' }}>
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
              style={{ width: '100%', height: '100%', background: '#ff4d00' }}
            />
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PageTransition;
