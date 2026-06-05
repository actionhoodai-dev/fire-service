import React, { useState, useEffect } from 'react';
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

import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

const WrappedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/products" element={<PageTransition><Products /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

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
