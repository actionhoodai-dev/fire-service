import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, FileDown } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: t('nav_home'), path: '/' },
    { name: t('nav_about'), path: '/about' },
    { name: t('nav_services'), path: '/services' },
    { name: t('nav_products'), path: '/products' },
    { name: t('nav_contact'), path: '/contact' },
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
                key={link.path} 
                to={link.path}
                className={location.pathname === link.path ? 'active' : ''}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="nav-contact-header">
             <LanguageToggle />
             <a href="https://github.com/actionhoodai-dev/fire-service/releases/download/assets/VARATHAVINAYAGAR.FIRE.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary-sm btn-alive">
               <FileDown size={16} /> {t('nav_brochure')}
             </a>
             <a href="tel:9944677149" className="contact-pill">
              <Phone size={16} />
              <span>{t('nav_phone')}</span>
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

      {/* Mobile Menu */}
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

            {/* Language toggle at top of mobile menu */}
            <div style={{ marginBottom: '20px' }}>
              <LanguageToggle />
            </div>

            <div className="mobile-menu-nav">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
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
                  className="btn-primary btn-alive mobile-cta" 
                  style={{ background: 'var(--primary)', color: 'white' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <FileDown size={18} /> {t('home_btn_brochure')}
                </a>
                <Link 
                  to="/contact" 
                  className="btn-outline btn-alive mobile-cta" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('home_btn_consultation')}
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
