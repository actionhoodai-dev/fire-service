import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SEOHead from '../components/SEOHead';





const Contact = () => {
  const { t, lang } = useLanguage();

  const [formData, setFormData] = React.useState({
    name: '',
    phone: '',
    email: '',
    service: t('contact_svc_refilling'),
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Construct customized WhatsApp message with email field
    const formattedMessage = `Hello Varatha Vinayagar Safety & Fire!\n\nI would like to inquire about your services.\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Service Requested:* ${formData.service}\n*Message:* ${formData.message || 'N/A'}`;
    
    // Encode for URL
    const encodedText = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/919944677149?text=${encodedText}`;
    
    // Open in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="contact-page pt-120 animate-fade-in">
      <SEOHead
        title="Contact Us - Get a Free Quote | 24/7 Emergency Support"
        description="Contact Varatha Vinayagar Safety & Fire (VV Safety) in Tuticorin for fire safety solutions. Call +91-9944677149 for free quotes. Visit us at 112Q/3, Muthukrishnapuram 2nd Street, Tuticorin, Tamil Nadu. 24/7 emergency fire safety support across 30+ cities."
        keywords="contact Varatha Vinayagar fire safety, VV Safety contact number, fire safety Tuticorin phone number, fire extinguisher Tuticorin address, fire safety free quote, emergency fire safety support, Varatha Vinayagar Tuticorin location, fire safety company near me, fire extinguisher service near me Tuticorin"
        path="/contact"
      />
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

      {/* Direct Quick Terminals Block */}
      <section className="section-padding pt-0 pb-40">
        <div className="container">
          <div className="contact-info-row">
            <div className="contact-box-horizontal glass-card">
              <div className="contact-box-icon-shell">
                <Phone className="accent-text" size={20} />
              </div>
              <div className="contact-box-content">
                <h3>{t('contact_phones')}</h3>
                <p className="mt-5">
                  <a href="tel:9944677149" className="contact-card-link">+91 99446 77149</a>
                </p>
                <p className="mt-2">
                  <a href="tel:7200763674" className="contact-card-link-secondary">Care: +91 72007 63674</a>
                </p>
              </div>
            </div>

            <div className="contact-box-horizontal glass-card">
              <div className="contact-box-icon-shell">
                <Mail className="accent-text" size={20} />
              </div>
              <div className="contact-box-content">
                <h3>{t('contact_email')}</h3>
                <p className="mt-5">
                  <a href="mailto:varathavinayagar1989@gmail.com" className="contact-card-link" style={{ fontSize: '0.82rem' }}>varathavinayagar1989@gmail.com</a>
                </p>
                <p className="mt-2">
                  <a href="mailto:essakirajaiyaz@gmail.com" className="contact-card-link-secondary" style={{ fontSize: '0.82rem' }}>essakirajaiyaz@gmail.com</a>
                </p>
              </div>
            </div>

            <div className="contact-box-horizontal glass-card">
              <div className="contact-box-icon-shell">
                <MapPin className="accent-text" size={20} />
              </div>
              <div className="contact-box-content">
                <h3>{t('contact_location')}</h3>
                <p className="mt-5" style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                  {t('contact_location_addr')}
                </p>
              </div>
            </div>

            <div className="contact-box-horizontal glass-card">
              <div className="contact-box-icon-shell">
                <Clock className="accent-text" size={20} />
              </div>
              <div className="contact-box-content">
                <h3>{t('contact_emergency')}</h3>
                <p className="mt-5 contact-card-link">{t('contact_emergency_avail')}</p>
                <p className="mt-2" style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  {t('contact_emergency_desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map & Quote Form Area */}
      <section className="section-padding bg-surface" id="quote-form">
        <div className="container">
          <div className="get-in-touch-grid">
            
            {/* Left side: Cities We Serve */}
            <div className="get-in-touch-map-box">
              <div className="get-in-touch-header-overlay mb-30">
                <span className="badge">{t('about_operation_badge')}</span>
                <h2 className="section-title-sm mt-10">
                  <span className="accent-text">{t('contact_get_in_touch')}</span>
                </h2>
              </div>
              
              <div className="contact-cities-grid">
                {[
                  'Chennai', 'Tiruvallur', 'Kanchipuram', 'Chengalpattu', 'Ranipet',
                  'Vellore', 'Tirupattur', 'Tiruvannamalai', 'Krishnagiri', 'Dharmapuri',
                  'Salem', 'Namakkal', 'Erode', 'Nilgiris', 'Coimbatore',
                  'Tiruppur', 'Karur', 'Dindigul', 'Madurai', 'Theni',
                  'Virudhunagar', 'Sivaganga', 'Ramanathapuram', 'Pudukkottai', 'Trichy',
                  'Perambalur', 'Ariyalur', 'Thanjavur', 'Tiruvarur', 'Nagapattinam',
                  'Mayiladuthurai', 'Cuddalore', 'Kallakurichi', 'Villupuram', 'Tuticorin',
                  'Tenkasi', 'Tirunelveli', 'Kanyakumari', 'Nagercoil', 'Hosur'
                ].map((city, idx) => (
                  <div key={idx} className="contact-city-chip">
                    <span className="contact-city-dot"></span>
                    {city}
                  </div>
                ))}
              </div>
              
              <p className="contact-map-desc mt-25 text-muted">
                {t('contact_protect_desc')}
              </p>
            </div>

            {/* Right side: Quote Form */}
            <form onSubmit={handleFormSubmit} className="glass-card contact-form-main">
              <h3 className="form-quote-title">{t('contact_form_free_quote')}</h3>
              
              <div className="form-grid mt-20">
                <div className="form-group">
                  <label>{t('contact_name')} *</label>
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
                  <label>{t('contact_phone_label')} *</label>
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
                  <label>{t('contact_email_label')} *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="example@mail.com" 
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
                    rows="4" 
                    placeholder={t('contact_message_placeholder')}
                  ></textarea>
                </div>
              </div>
              
              <button type="submit" className="btn-primary w-full mt-25">
                {t('contact_send')}
              </button>
            </form>

          </div>

          {/* Physical Office Location */}
          <div className="map-container-main glass-card overflow-hidden mt-80">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.712202728212!2d78.15088527399394!3d8.813084792333468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b03efe149ba4967%3A0xbf24fd03611dea1!2sVARATHA%20VINAYAGAR%20SAFETY%20%26%20FIRE%20SALES%20AND%20SERVICES!5e0!3m2!1sen!2sin!4v1775810818175!5m2!1sen!2sin" 
              width="100%" 
              height="420" 
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
