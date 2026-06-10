import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';
import PageTransition from './components/PageTransition';
import FloatingActions from './components/FloatingActions';
import ChatAssistant from './components/ChatAssistant';
import PromoBanner from './components/PromoBanner';
import { LanguageProvider } from './context/LanguageContext';
import './App.css';

// Lazy load pages for code-splitting
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Products = lazy(() => import('./pages/Products'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

const WrappedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          color: '#ef4444',
          fontSize: '1.1rem',
          fontWeight: '500',
          background: '#090a0f'
        }}>
          <span className="btn-spinner" style={{ 
            borderColor: 'rgba(239, 68, 68, 0.2)', 
            borderTopColor: '#ef4444', 
            marginRight: '12px',
            width: '24px',
            height: '24px'
          }}></span>
          Loading...
        </div>
      }>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
          <Route path="/products" element={<PageTransition><Products /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

function App() {
  // Check if user has visited in this session to skip preloader on subsequent navigation/refreshes
  const [loading, setLoading] = useState(() => {
    if (typeof window !== 'undefined') {
      const hasVisited = sessionStorage.getItem('vv_has_visited');
      return !hasVisited;
    }
    return true;
  });

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
        try {
          sessionStorage.setItem('vv_has_visited', 'true');
        } catch (e) {
          console.warn('sessionStorage is not available:', e);
        }
      }, 1200); // Shaved off 1.6s from initial bot/mobile load
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <LanguageProvider>
      <Router>
        <AnimatePresence mode="wait">
          {loading && <Preloader key="preloader" />}
        </AnimatePresence>

        <div className="app">
          <ScrollToTop />
          <div className="particle-background">
            <div className="cluster-1"></div>
            <div className="cluster-2"></div>
          </div>
          <Navbar />
          <main className="main-content">
            <WrappedRoutes />
          </main>
          <ChatAssistant />
          <FloatingActions />
          {!loading && <PromoBanner />}
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
