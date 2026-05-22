import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="contact-page pt-120 animate-fade-in">
      {/* Premium Hero Section */}
      <section className="contact-hero section-padding">
        <div className="container contact-hero-grid">
          <div className="contact-hero-text">
            <span className="badge">Direct Terminals</span>
            <h1 className="hero-title mt-10">
              Reach Out to Our <span className="accent-text">Safety Protocol</span> Team
            </h1>
            <p className="mt-20 text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
              Have an urgent safety requirement, extinguisher refilling request, or system installation query? 
              Our certified fire safety engineers are standby 24/7 to provide rapid support, quotes, and structural hazard consultation.
            </p>
            <div className="contact-hero-actions mt-30" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <a href="tel:9944677149" className="btn-primary">
                <Phone size={18} /> Call Emergency Team
              </a>
              <a href="#quote-form" className="btn-outline">
                Request Free Quote
              </a>
            </div>
          </div>
          
          <div className="contact-hero-image-wrapper">
            <div className="contact-hero-image-glow" />
            <img 
              src="/contact_hero.png" 
              alt="VV Safety Command Center" 
              className="contact-hero-img" 
            />
          </div>
        </div>
      </section>

      {/* Contact Grid and Quote Form Section */}
      <section className="section-padding pt-0" id="quote-form">
        <div className="container">
          <div className="section-header text-center mb-60">
            <span className="badge">Support Options</span>
            <h2 className="section-title">Send a <span className="accent-text">Direct Terminal</span> Query</h2>
          </div>

          <div className="contact-grid">
            <div className="contact-info-panel">
              <div className="contact-box glass-card mb-20">
                <Phone className="accent-text mb-10" />
                <h3>Phone Numbers</h3>
                <div className="phone-list mt-10" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a href="tel:9944677149" className="btn-primary" style={{ justifyContent: 'center' }}>
                    <Phone size={16} /> +91 99446 77149
                  </a>
                  <a href="tel:7200763674" className="btn-outline" style={{ justifyContent: 'center' }}>
                    <Phone size={16} /> +91 72007 63674
                  </a>
                </div>
              </div>

              <div className="contact-box glass-card mb-20">
                <Mail className="accent-text mb-10" />
                <h3>Email</h3>
                <a href="mailto:varathavinayagar1989@gmail.com" className="btn-outline mt-10" style={{ justifyContent: 'center', width: '100%' }}>
                  <Mail size={16} /> Email Us
                </a>
              </div>

              <div className="contact-box glass-card">
                <MapPin className="accent-text mb-10" />
                <h3>Location</h3>
                <p>112Q/3, Muthukrishnapuram 2nd Street, Tuticorin, Tamil Nadu</p>
              </div>
              
              <div className="contact-box glass-card mt-20">
                <Clock className="accent-text mb-10" />
                <h3>Emergency Service</h3>
                <p className="text-muted mt-5">24/7 Availability</p>
                <p className="mt-10" style={{ fontSize: '0.9rem' }}>Our team is fully equipped and on standby around the clock for rapid emergency response.</p>
              </div>
            </div>

            <form className="glass-card contact-form-main">
              <h3>Request a Quote</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label>Contact Number</label>
                  <input type="tel" placeholder="+91 00000 00000" required />
                </div>
                <div className="form-group full-width">
                  <label>Service Required</label>
                  <select>
                    <option>Refilling</option>
                    <option>Servicing</option>
                    <option>H.P. Testing</option>
                    <option>Equipment Supply</option>
                  </select>
                </div>
                <div className="form-group full-width">
                  <label>Message</label>
                  <textarea rows="5" placeholder="Tell us about your requirements..."></textarea>
                </div>
              </div>
              <button className="btn-primary w-full mt-20">Send Message</button>
            </form>
          </div>

          <div className="map-container-main glass-card overflow-hidden mt-80">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.712202728212!2d78.15088527399394!3d8.813084792333468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b03efe149ba4967%3A0xbf24fd03611dea1!2sVARATHA%20VINAYAGAR%20SAFETY%20%26%20FIRE%20SALES%20AND%20SERVICES!5e0!3m2!1sen!2sin!4v1775810818175!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
