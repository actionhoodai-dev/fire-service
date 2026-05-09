import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t, lang } = useLanguage();

  const serviceOptions = lang === 'ta'
    ? ['நிரப்புதல்', 'சேவை', 'உ.அ. சோதனை', 'உபகரண விநியோகம்']
    : ['Refilling', 'Servicing', 'H.P. Testing', 'Equipment Supply'];

  return (
    <div className="contact-page pt-120">
      <section className="section-padding">
        <div className="section-header text-center">
          <span className="badge">{t('contact_badge')}</span>
          <h1 className="section-title">{t('contact_h1')} <span className="accent-text">{t('contact_h1_span')}</span> {t('contact_h1_end')}</h1>
        </div>

        <div className="contact-grid container mt-60">
          <div className="contact-info-panel">
            <div className="contact-box glass-card mb-20">
              <Phone className="accent-text mb-10" />
              <h3>{t('contact_phones')}</h3>
              <div className="phone-list mt-10" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href="tel:9944677149" className="btn-primary btn-alive" style={{ justifyContent: 'center' }}>
                  <Phone size={16} /> +91 99446 77149
                </a>
                <a href="tel:7200763674" className="btn-outline btn-alive" style={{ justifyContent: 'center' }}>
                  <Phone size={16} /> +91 72007 63674
                </a>
              </div>
            </div>

            <div className="contact-box glass-card mb-20">
              <Mail className="accent-text mb-10" />
              <h3>{t('contact_email')}</h3>
              <a href="mailto:varathavinayagar1989@gmail.com" className="btn-outline btn-alive mt-10" style={{ justifyContent: 'center', width: '100%' }}>
                <Mail size={16} /> {t('contact_email_btn')}
              </a>
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

          <form className="glass-card contact-form-main">
            <h3>{t('contact_form_title')}</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>{t('contact_name')}</label>
                <input type="text" placeholder={t('contact_name_placeholder')} required />
              </div>
              <div className="form-group">
                <label>{t('contact_phone_label')}</label>
                <input type="tel" placeholder={t('contact_phone_placeholder')} required />
              </div>
              <div className="form-group full-width">
                <label>{t('contact_service')}</label>
                <select>
                  {serviceOptions.map((opt, i) => <option key={i}>{opt}</option>)}
                </select>
              </div>
              <div className="form-group full-width">
                <label>{t('contact_message')}</label>
                <textarea rows="5" placeholder={t('contact_message_placeholder')}></textarea>
              </div>
            </div>
            <button className="btn-primary btn-alive w-full mt-20">{t('contact_send')}</button>
          </form>
        </div>

        <div className="container mt-80">
          <div className="map-container-main glass-card overflow-hidden">
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
