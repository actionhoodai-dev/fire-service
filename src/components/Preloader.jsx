import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <motion.div 
      className="preloader"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
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
        zIndex: 10000,
        pointerEvents: 'none'
      }}
    >
      {/* Logo container with pulse/glow */}
      <div style={{ position: 'relative', width: '120px', height: '120px' }}>
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 77, 0, 0.4) 0%, rgba(255, 77, 0, 0) 70%)',
            filter: 'blur(15px)'
          }}
        />
        <motion.img 
          src="/logo.png" 
          alt="Varatha Vinayagar Safety" 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [0.95, 1.05, 0.95], opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'contain',
            borderRadius: '50%',
            boxShadow: '0 10px 30px rgba(255, 77, 0, 0.2)',
            border: '3px solid #ff4d00',
            background: '#ffffff',
            padding: '5px'
          }} 
        />
      </div>

      <motion.p
        className="mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{ color: '#ff4d00', letterSpacing: '4px', fontWeight: 800, fontSize: '0.85rem' }}
      >
        VARATHA VINAYAGAR SAFETY
      </motion.p>
      
      {/* Loading Bar */}
      <div style={{ width: '200px', height: '3px', background: '#f0f0f0', marginTop: '20px', borderRadius: '3px', overflow: 'hidden' }}>
        <motion.div 
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          style={{ width: '100%', height: '100%', background: '#ff4d00' }}
        />
      </div>
    </motion.div>
  );
};

export default Preloader;
