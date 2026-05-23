import React from 'react';
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';

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
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [0.8, 1.2, 1], opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
      >
        <Flame size={80} color="#ff4d00" strokeWidth={1.5} style={{ filter: 'drop-shadow(0 0 15px rgba(255, 77, 0, 0.5))' }} />
      </motion.div>
      <motion.p
        className="mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{ color: '#ff4d00', letterSpacing: '4px', fontWeight: 700, fontSize: '0.8rem' }}
      >
        INITIALIZING SAFETY SYSTEMS...
      </motion.p>
      
      {/* Loading Bar */}
      <div style={{ width: '200px', height: '2px', background: '#f0f0f0', marginTop: '20px', borderRadius: '2px', overflow: 'hidden' }}>
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
