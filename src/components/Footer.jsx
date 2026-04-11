import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Phone, Mail, MapPin, ChevronRight, ShieldCheck } from 'lucide-react';

const FooterLink = ({ to, label }) => (
  <Link to={to} className="footer-nav-item">
    <ChevronRight size={14} className="nav-arrow" />
    <span>{label}</span>
  </Link>
);

const GSTBadge = ({ number }) => (
  <div className="gst-component mt-20">
    <div className="gst-label">Registered Business</div>
    <div className="gst-value">
      <ShieldCheck size={16} className="text-secondary" />
      <span>{number}</span>
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer className="footer-root">
      {/* Top CTA Bar */}
      <div className="footer-cta-bar glass-card container">
        <div className="cta-content">
          <h3>Need an Emergency Safety Audit?</h3>
          <p>Our experts are available 24/7 for Tuticorin industries.</p>
        </div>
        <Link to="/contact" className="btn-primary">Request Audit Now</Link>
      </div>

      <div className="footer-main section-padding">
        <div className="container footer-grid">
          {/* Brand & GST Section */}
          <div className="footer-column brand-col">
            <div className="logo mb-20">
              <Flame className="logo-icon" />
              <div className="logo-text">
                <span className="brand-name">VARATHA VINAYAGAR</span>
                <span className="brand-sub">SAFETY & FIRE</span>
              </div>
            </div>
            <p className="footer-slogan">“Never Trust Fire! Trust Varatha Vinayagar Safety & Fire”</p>
            <GSTBadge number="33FOCPP2123C1ZJ" />
          </div>

          {/* Quick Links Section */}
          <div className="footer-column">
            <h4 className="footer-header">Quick Navigation</h4>
            <nav className="footer-nav">
              <FooterLink to="/" label="Home" />
              <FooterLink to="/about" label="About Us" />
              <FooterLink to="/services" label="Services" />
              <FooterLink to="/products" label="Products" />
              <FooterLink to="/contact" label="Contact" />
            </nav>
          </div>

          {/* Contact Section */}
          <div className="footer-column">
            <h4 className="footer-header">Connect With Us</h4>
            <div className="footer-contact-list">
              <div className="contact-item">
                <Phone size={18} className="accent-text" />
                <div className="contact-details">
                   <a href="tel:9944677149">+91 99446 77149</a>
                   <a href="tel:7200763674">+91 72007 63674</a>
                </div>
              </div>
              <div className="contact-item">
                <Mail size={18} className="accent-text" />
                <a href="mailto:varathavinayagar1989@gmail.com">varathavinayagar1989@gmail.com</a>
              </div>
              <div className="contact-item">
                <MapPin size={18} className="accent-text" style={{flexShrink: 0}} />
                <address>112Q/3, Muthukrishnapuram 2nd Street, Tuticorin</address>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container flex-between">
          <p>&copy; {new Date().getFullYear()} Varatha Vinayagar Safety & Fire. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/contact">Safety Policy</Link>
            <Link to="/contact">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
