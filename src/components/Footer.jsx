import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t, lang } = useLanguage();

  const navLinks = lang === 'ta'
    ? [
        { label: 'முகப்பு', path: '/' },
        { label: 'எங்களை பற்றி', path: '/about' },
        { label: 'சேவைகள்', path: '/services' },
        { label: 'தயாரிப்புகள்', path: '/products' },
        { label: 'தொடர்பு', path: '/contact' },
      ]
    : [
        { label: 'Home', path: '/' },
        { label: 'About Us', path: '/about' },
        { label: 'Services', path: '/services' },
        { label: 'Products', path: '/products' },
        { label: 'Contact', path: '/contact' },
      ];

  return (
    <footer className="footer-main">
      <div className="footer-atmos-foundation">
        <div className="footer-atmos-gradient" />
      </div>

      <div className="container">
        <div className="footer-grid-primary">
          {/* Brand Block */}
          <div className="footer-brand-shell">
            <Link to="/" className="logo">
              <img src="/logo.png" alt="VV Safety" className="logo-img-circular" style={{ width: '60px', height: '60px' }} />
              <div className="logo-text">
                <span className="brand-name" style={{ fontSize: '1.4rem' }}>VARATHA VINAYAGAR</span>
                <span className="brand-sub">SAFETY & FIRE PROTOCOL</span>
              </div>
            </Link>
            
            <p className="footer-motto">
              “Never Trust Fire! Trust Varatha Vinayagar Safety & Fire - Your Structural Integrity Guard.”
            </p>

            <div className="glass-card" style={{ 
              padding: '15px 25px', 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '15px',
              background: 'rgba(230, 47, 16, 0.05)',
              border: '1px solid rgba(230, 47, 16, 0.25)',
              boxShadow: '0 10px 25px rgba(230, 47, 16, 0.05)',
              borderRadius: '12px'
            }}>
              <ShieldCheck style={{ color: 'var(--primary)' }} size={24} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.65rem', fontWeight: '900', color: 'var(--text-muted)', letterSpacing: '2px' }}>GSTIN REGISTERED</span>
                <span style={{ fontSize: '1rem', fontWeight: '900', color: '#fff', fontFamily: 'monospace' }}>33FOCPP2123C1ZJ</span>
              </div>
            </div>
          </div>

          {/* Navigation Block */}
          <div className="footer-nav-block">
            <h4>Navigation</h4>
            <div className="footer-links-column">
              {['Home', 'About Us', 'Services', 'Products', 'Contact'].map(link => (
                <Link 
                  key={link} 
                  to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '')}`}
                  className="footer-nav-link"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Support Block */}
          <div className="footer-sync-block">
            <h4>Data Terminals</h4>
            <div className="footer-links-column">
              <a href="tel:+919944677149" className="footer-contact-item">
                <div className="footer-contact-icon">
                  <Phone size={18} />
                </div>
                <span>+91 99446 77149</span>
              </a>
              <a href="mailto:varathavinayagar1989@gmail.com" className="footer-contact-item">
                <div className="footer-contact-icon">
                  <Mail size={18} />
                </div>
                <span style={{ fontSize: '0.85rem' }}>varathavinayagar1989@gmail.com</span>
              </a>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=112Q%2F3%2C+Muthukrishnapuram+2nd+Street%2C+Tuticorin" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-contact-item"
              >
                <div className="footer-contact-icon">
                  <MapPin size={18} />
                </div>
                <span style={{ fontSize: '0.85rem', lineHeight: '1.4' }}>112Q/3, Muthukrishnapuram 2nd Street, Tuticorin</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <p>&copy; {new Date().getFullYear()} VV Safety & Fire. Protocol Status: SECURE</p>
          <p style={{ color: 'var(--primary)' }}>Reliability | Integrity | Structural Protection</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
