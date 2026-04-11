import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="logo">
            <Flame className="logo-icon" />
            <div className="logo-text">
              <span className="brand-name">VARATHA VINAYAGAR</span>
              <span className="brand-sub">SAFETY & FIRE</span>
            </div>
          </div>
          <p className="mt-10">“Never Trust Fire! Trust Varatha Vinayagar Safety & Fire”</p>
          <div className="gst-badge">GSTIN: 33FOCPP2123C1ZJ</div>
        </div>

        <div className="footer-links">
          <h4>Navigation</h4>
          <div className="footer-nav-list">
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div className="footer-contact">
          <h4>Contact Info</h4>
          <div className="footer-nav-list">
            <p><Phone size={14} /> +91 99446 77149 <br/><Phone size={14} style={{opacity: 0}} /> +91 72007 63674</p>
            <p><Mail size={14} /> varathavinayagar1989@gmail.com</p>
            <p><MapPin size={14} style={{flexShrink: 0}} /> 112Q/3, Muthukrishnapuram 2nd Street, Tuticorin</p>
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
