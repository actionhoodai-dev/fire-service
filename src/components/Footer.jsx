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
        <div className="footer-glass-box">
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
              
              <p className="footer-motto">{t('footer_motto')}</p>

              <div className="glass-card" style={{ 
                padding: '15px 25px', 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '15px',
                background: '#ffcc00',
                border: 'none',
                boxShadow: '0 10px 25px rgba(255, 204, 0, 0.15)'
              }}>
                <ShieldCheck style={{ color: '#000' }} size={24} />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.65rem', fontWeight: '900', color: 'rgba(0,0,0,0.6)', letterSpacing: '2px' }}>GSTIN REGISTERED</span>
                  <span style={{ fontSize: '1rem', fontWeight: '900', color: '#000' }}>33FOCPP2123C1ZJ</span>
                </div>
              </div>
            </div>

            {/* Navigation Block */}
            <div className="footer-nav-block">
              <h4>{t('footer_nav')}</h4>
              <div className="footer-links-column">
                {navLinks.map(link => (
                  <Link key={link.path} to={link.path} className="footer-nav-link">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Block */}
            <div className="footer-sync-block">
              <h4>{t('footer_terminals')}</h4>
              <div className="footer-links-column">
                <a href="tel:+919944677149" className="footer-contact-item">
                  <div className="footer-contact-icon"><Phone size={18} /></div>
                  <span>+91 99446 77149</span>
                </a>
                <a href="mailto:varathavinayagar1989@gmail.com" className="footer-contact-item">
                  <div className="footer-contact-icon"><Mail size={18} /></div>
                  <span style={{ fontSize: '0.7rem', textTransform: 'uppercase' }}>varathavinayagar1989@gmail.com</span>
                </a>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=112Q%2F3%2C+Muthukrishnapuram+2nd+Street%2C+Tuticorin" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-contact-item"
                >
                  <div className="footer-contact-icon"><MapPin size={18} /></div>
                  <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', lineHeight: '1.4' }}>112Q/3, Muthukrishnapuram 2nd Street, Tuticorin</span>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <p>&copy; {new Date().getFullYear()} {t('footer_copy')}</p>
            <p style={{ color: 'var(--primary)' }}>{t('footer_tagline')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
