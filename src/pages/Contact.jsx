import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t, lang } = useLanguage();

  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    service: t('contact_svc_refilling'),
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Construct customized WhatsApp message
    const formattedMessage = `Hello Varatha Vinayagar Safety & Fire!\n\nI would like to inquire about your services.\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Service Requested:* ${formData.service}\n*Message:* ${formData.message || 'N/A'}`;
    
    // Encode for URL
    const encodedText = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/919944677149?text=${encodedText}`;
    
    // Open in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="contact-page pt-120 animate-fade-in">
      {/* Premium Hero Section */}
      <section className="contact-hero section-padding">
        <div className="container contact-hero-grid">
          <div className="contact-hero-text">
            <span className="badge">{t('contact_hero_badge')}</span>
            <h1 className="hero-title mt-10">
              {t('contact_hero_title_1')} <span className="accent-text">{t('contact_hero_title_span')}</span> {t('contact_hero_title_2')}
            </h1>
            <p className="mt-20 text-muted" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
              {t('contact_hero_desc')}
            </p>
            <div className="contact-hero-actions mt-30" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <a href="tel:9944677149" className="btn-primary">
                <Phone size={18} /> {t('contact_call_btn')}
              </a>
              <a href="#quote-form" className="btn-outline">
                {t('contact_quote_btn')}
              </a>
            </div>
          </div>
          
          <div className="contact-hero-image-wrapper">
            <div className="contact-hero-image-glow" />
            <img 
              src="/contact_hero_new.png" 
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
            <span className="badge">{t('contact_support_badge')}</span>
            <h2 className="section-title">{t('contact_support_title_1')} <span className="accent-text">{t('contact_support_title_span')}</span> {t('contact_support_title_2')}</h2>
          </div>

          <div className="contact-grid">
            <div className="contact-info-panel">
              <div className="contact-box glass-card mb-20">
                <Phone className="accent-text mb-10" />
                <h3>{t('contact_phones')}</h3>
                <div className="phone-list mt-10" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a href="tel:9944677149" className="btn-primary" style={{ justifyContent: 'center' }}>
                    <Phone size={16} /> +91 99446 77149
                  </a>
                  <a href="tel:7200763674" className="btn-outline" style={{ justifyContent: 'center' }}>
                    <Phone size={16} /> Customer Care No: +91 72007 63674
                  </a>
                </div>
              </div>

              <div className="contact-box glass-card mb-20">
                <Mail className="accent-text mb-10" />
                <h3>{t('contact_email')}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
                  <a href="mailto:varathavinayagar1989@gmail.com" className="btn-outline" style={{ justifyContent: 'center', width: '100%' }}>
                    <Mail size={16} /> varathavinayagar1989
                  </a>
                  <a href="mailto:essakirajaiyaz@gmail.com" className="btn-outline" style={{ justifyContent: 'center', width: '100%' }}>
                    <Mail size={16} /> essakirajaiyaz
                  </a>
                </div>
              </div>

              <div className="contact-box glass-card">
                <MapPin className="accent-text mb-10" />
                <h3>{t('contact_location')}</h3>
                <p>{t('contact_location_addr')}</p>
              </div>
              
              <div className="contact-box glass-card mt-20">
                <Clock className="accent-text mb-10" />
                <h3>{t('contact_emergency')}</h3>
                <p className="text-muted mt-5">{t('contact_emergency_avail')}</p>
                <p className="mt-10" style={{ fontSize: '0.9rem' }}>{t('contact_emergency_desc')}</p>
              </div>
            </div>

            <form onSubmit={handleFormSubmit} className="glass-card contact-form-main">
              <h3>{t('contact_form_title')}</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label>{t('contact_name')}</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t('contact_name_placeholder')} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>{t('contact_phone_label')}</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={t('contact_phone_placeholder')} 
                    required 
                  />
                </div>
                <div className="form-group full-width">
                  <label>{t('contact_service')}</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value={t('contact_svc_refilling')}>{t('contact_svc_refilling')}</option>
                    <option value={t('contact_svc_servicing')}>{t('contact_svc_servicing')}</option>
                    <option value={t('contact_svc_hptesting')}>{t('contact_svc_hptesting')}</option>
                    <option value={t('contact_svc_supply')}>{t('contact_svc_supply')}</option>
                  </select>
                </div>
                <div className="form-group full-width">
                  <label>{t('contact_message')}</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5" 
                    placeholder={t('contact_message_placeholder')}
                  ></textarea>
                </div>
              </div>
              <button type="submit" className="btn-primary w-full mt-20">{t('contact_send')}</button>
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
