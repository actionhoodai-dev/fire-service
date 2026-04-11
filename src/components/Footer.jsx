import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="logo footer-logo-padded">
            <Flame className="logo-icon" />
            <div className="logo-text">
              <span className="brand-name">VARATHA VINAYAGAR</span>
              <span className="brand-sub">SAFETY & FIRE</span>
            </div>
          </div>
          <p className="footer-tagline">“Never Trust Fire! Trust Varatha Vinayagar Safety & Fire”</p>
          
          <div className="gst-container-premium">
            <ShieldCheck size={16} className="accent-text" />
            <div className="gst-content">
              <span className="gst-label">GSTIN REGISTERED</span>
              <span className="gst-number">33FOCPP2123C1ZJ</span>
            </div>
          </div>
        </div>

        <div className="footer-links">
          <h4>Navigation</h4>
          <div className="footer-nav-list">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div className="footer-contact">
          <h4>Contact Info</h4>
          <div className="footer-nav-list">
            <a href="tel:+919944677149" className="footer-contact-link">
              <Phone size={14} /> +91 99446 77149
            </a>
            <a href="tel:+917200763674" className="footer-contact-link">
              <Phone size={14} /> +91 72007 63674
            </a>
            <a href="mailto:varathavinayagar1989@gmail.com" className="footer-contact-link">
              <Mail size={14} /> varathavinayagar1989@gmail.com
            </a>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=112Q%2F3%2C+Muthukrishnapuram+2nd+Street%2C+Tuticorin" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-contact-link address-link"
            >
              <MapPin size={14} style={{flexShrink: 0}} /> 112Q/3, Muthukrishnapuram 2nd Street, Tuticorin
            </a>
          </div>
        </div>

        <div className="footer-copy">
          <p>&copy; {new Date().getFullYear()} Varatha Vinayagar Safety & Fire. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
