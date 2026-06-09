import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Flame, FileDown, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';

const megaMenuData = [
  {
    category: "Fire Extinguishers",
    products: [
      "Powder Type (ABC)",
      "CO₂ Type",
      "Foam & Water Type",
      "Clean Agent (FE-36)",
      "Kitchen Fire Extinguishers",
      "D-Class Metal Fire Extinguishers"
    ]
  },
  {
    category: "Fire Alarm Systems",
    products: [
      "Digital Addressable Fire Alarm Panels",
      "Smoke Detectors",
      "Heat Detectors",
      "Manual Call Points",
      "Gas Release Systems"
    ]
  },
  {
    category: "Hydrant & Fire Fighting",
    products: [
      "Landing Valves",
      "Fire Hydrants (2-way / 4-way)",
      "Hose Reel Systems",
      "Foam Monitor Systems",
      "Water Monitors"
    ]
  },
  {
    category: "Safety Products (PPE)",
    products: [
      "Head Protection",
      "Eye & Face Protection",
      "Respiratory Protection",
      "Hand Gloves",
      "Safety Shoes",
      "Heat Protective Garments"
    ]
  },
  {
    category: "Road Safety Products",
    products: [
      "Traffic Cones",
      "Reflective Signs",
      "Barricades",
      "Safety Markings"
    ]
  }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsHovered, setIsProductsHovered] = useState(false);
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
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('mobile-menu-open');
    }
    return () => { 
      document.body.style.overflow = ''; 
      document.body.classList.remove('mobile-menu-open');
    };
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
            {navLinks.map((link) => {
              if (link.path === '/products') {
                return (
                  <div
                    key={link.name}
                    className="nav-item-has-dropdown"
                    onMouseEnter={() => setIsProductsHovered(true)}
                    onMouseLeave={() => setIsProductsHovered(false)}
                  >
                    <Link 
                      to={link.path}
                      className={location.pathname === link.path ? 'active' : ''}
                    >
                      {link.name}
                    </Link>
                  </div>
                );
              }
              return (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className={location.pathname === link.path ? 'active' : ''}
                >
                  {link.name}
                </Link>
              );
            })}
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

        {/* Mega Menu Dropdown */}
        <AnimatePresence>
          {isProductsHovered && (
            <motion.div 
              className="mega-menu"
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onMouseEnter={() => setIsProductsHovered(true)}
              onMouseLeave={() => setIsProductsHovered(false)}
            >
              <div className="mega-menu-grid">
                {megaMenuData.map((col, idx) => (
                  <div key={idx} className="mega-menu-col">
                    <Link 
                      to="/products" 
                      state={{ filter: col.category }}
                      className="mega-menu-col-title"
                      onClick={() => setIsProductsHovered(false)}
                    >
                      {col.category}
                    </Link>
                    <div className="mega-menu-items">
                      {col.products.map((prod) => (
                        <Link 
                          key={prod} 
                          to="/products" 
                          state={{ filter: col.category }}
                          className="mega-menu-item"
                          onClick={() => setIsProductsHovered(false)}
                        >
                          <ChevronRight size={10} className="mega-item-icon" />
                          <span>{prod}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mega-menu-footer">
                <div className="mega-footer-content">
                  <span className="badge">{t('mega_footer_badge')}</span>
                  <p>{t('mega_footer_desc')}</p>
                </div>
                <Link to="/contact" className="btn-primary-sm" onClick={() => setIsProductsHovered(false)}>
                  {t('mega_footer_btn')}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ISO Certification Announcement Bar */}
        <div className="nav-iso-bar">
          <div className="nav-iso-content">
            <span className="nav-iso-text">{t('hero_iso_certification')}</span>
          </div>
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
              <p className="mobile-menu-label">{t('mobile_emergency_label')}</p>
              <div className="mobile-phone-list">
                <a href="tel:9944677149"><Phone size={16} /> +91 99446 77149</a>
                <a href="tel:7200763674"><Phone size={16} /> Customer Care No: +91 72007 63674</a>
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
