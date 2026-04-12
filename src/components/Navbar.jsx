import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Flame, FileDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="nav-container">
          <Link to="/" className="logo">
            <img src="/logo.png" alt="Varatha Vinayagar Logo" className="logo-img-circular" />
            <div className="logo-text">
              <span className="brand-name">VARATHA VINAYAGAR</span>
              <span className="brand-sub">SAFETY & FIRE</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="nav-links">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={location.pathname === link.path ? 'active' : ''}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="nav-contact-header">
             <a href="https://github.com/actionhoodai-dev/fire-service/releases/download/assets/VARATHAVINAYAGAR.FIRE.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary-sm" style={{ marginRight: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
               <FileDown size={16} /> Brochure
             </a>
             <a href="tel:9944677149" className="contact-pill">
              <Phone size={16} />
              <span>+91 99446 77149</span>
            </a>
          </div>

          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - rendered as a portal-like fullscreen overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button 
              className="mobile-close-btn"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={32} />
            </button>
            <div className="mobile-menu-nav">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  <Link 
                    to={link.path} 
                    className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mobile-menu-footer">
              <p className="mobile-menu-label">24/7 Emergency Support</p>
              <div className="mobile-phone-list">
                <a href="tel:9944677149"><Phone size={16} /> +91 99446 77149</a>
                <a href="tel:7200763674"><Phone size={16} /> +91 72007 63674</a>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '15px' }}>
                <a 
                  href="https://github.com/actionhoodai-dev/fire-service/releases/download/assets/VARATHAVINAYAGAR.FIRE.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mobile-cta" 
                  style={{ background: 'var(--primary)', color: 'white' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FileDown size={18} /> Download Brochure
                </a>
                <Link 
                  to="/contact" 
                  className="btn-outline mobile-cta" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
