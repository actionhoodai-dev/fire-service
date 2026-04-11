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
          <p className="mt-10">Premium Fire Safety Solutions across Tuticorin.</p>
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
            <p><Phone size={14} /> 63793 21829</p>
            <p><Mail size={14} /> varathavinayagar@gmail.com</p>
            <p><MapPin size={14} /> Muthukrishnapuram, Tuticorin</p>
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
