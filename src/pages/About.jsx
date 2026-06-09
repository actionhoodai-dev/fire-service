import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Eye, Rocket, ThumbsUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const PartnerCarousel = () => {
  const { t } = useLanguage();
  return (
    <div className="partner-section">
      <div className="section-header text-center mb-40" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
         <span className="badge">{t('about_partner_badge')}</span>
         <h2 className="section-title" style={{fontSize: '2rem', textAlign: 'center'}}>{t('about_partner_title')} <span className="accent-text">{t('about_partner_title_span')}</span></h2>
      </div>
      <div className="partner-carousel-wrapper">
        <motion.div 
          className="partner-carousel-track"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 45, ease: "linear", repeat: Infinity }}
        >
          <div className="partner-strip">
            <img src="/partners_strip.png" alt="Trusted Brands and Partners" />
          </div>
          <div className="partner-strip">
            <img src="/partners_strip.png" alt="Trusted Brands and Partners" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const cities = [
  'Chennai', 'Tiruvallur', 'Kanchipuram', 'Chengalpattu', 'Ranipet',
  'Vellore', 'Tirupattur', 'Tiruvannamalai', 'Krishnagiri', 'Dharmapuri',
  'Salem', 'Namakkal', 'Erode', 'Nilgiris', 'Coimbatore',
  'Tiruppur', 'Karur', 'Dindigul', 'Madurai', 'Theni',
  'Virudhunagar', 'Sivaganga', 'Ramanathapuram', 'Pudukkottai', 'Trichy',
  'Perambalur', 'Ariyalur', 'Thanjavur', 'Tiruvarur', 'Nagapattinam',
  'Mayiladuthurai', 'Cuddalore', 'Kallakurichi', 'Villupuram', 'Tuticorin',
  'Tenkasi', 'Tirunelveli', 'Kanyakumari', 'Nagercoil', 'Hosur'
];

const About = () => {
  const { t, lang } = useLanguage();

  const visionItems = [t('about_vision_1'), t('about_vision_2'), t('about_vision_3'), t('about_vision_4')];
  const missionItems = [t('about_mission_1'), t('about_mission_2'), t('about_mission_3'), t('about_mission_4')];
  const qualityItems = [t('about_quality_1'), t('about_quality_2'), t('about_quality_3'), t('about_quality_4')];

  const visionDesc = t('about_vision_desc');
  const missionDesc = t('about_mission_desc');
  const qualityDesc = t('about_quality_desc');

  return (
    <div className="about-page pt-120">
      <section className="section-padding">
        <div className="container grid-2">
          <motion.div 
            className="about-visual-box relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="glass-card about-main-card overflow-hidden">
               <img src="/infrastructure.png" alt="Fire Extinguisher, Hydrant, and Alarm Products Showcase" />
            </div>
          </motion.div>

          <motion.div 
            className="about-content-side"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="badge">{t('about_badge')}</span>
            <h1 className="section-title">{t('about_h1')} <span className="accent-text">{t('about_h1_span')}</span></h1>
            <p className="mt-20">{t('about_p1')}</p>
            <p className="mt-10">{t('about_p2')}</p>
            
            <div className="about-check-list mt-30">
               <div className="check-item">
                  <CheckCircle size={18} className="accent-text" />
                  <span>{t('about_check1')}</span>
               </div>
               <div className="check-item">
                  <CheckCircle size={18} className="accent-text" />
                  <span>{t('about_check2')}</span>
               </div>
               <div className="check-item">
                  <CheckCircle size={18} className="accent-text" />
                  <span>{t('about_check3')}</span>
               </div>
               <div className="check-item">
                  <CheckCircle size={18} className="accent-text" />
                  <span>{t('about_check4')}</span>
               </div>
            </div>
          </motion.div>
        </div>
      </section>
 
      <section className="section-padding bg-surface" style={{ padding: '60px 0' }}>
         <PartnerCarousel />
      </section>
 
      <section className="section-padding">
        <div className="container">
          <div className="values-grid">
            <motion.div className="glass-card value-card" whileHover={{ y: -5 }}>
              <div className="value-icon"><Eye size={30} /></div>
              <h3>{t('about_vision_title')}</h3>
              <p>{visionDesc}</p>
              <ul className="text-muted mt-10" style={{ listStylePosition: 'inside' }}>
                {visionItems.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </motion.div>
 
            <motion.div className="glass-card value-card" whileHover={{ y: -5 }}>
              <div className="value-icon"><Rocket size={30} /></div>
              <h3>{t('about_mission_title')}</h3>
              <p>{missionDesc}</p>
              <ul className="text-muted mt-10" style={{ listStylePosition: 'inside' }}>
                {missionItems.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </motion.div>
 
            <motion.div className="glass-card value-card" whileHover={{ y: -5 }}>
              <div className="value-icon"><ThumbsUp size={30} /></div>
              <h3>{t('about_quality_title')}</h3>
              <p>{qualityDesc}</p>
              <ul className="text-muted mt-10" style={{ listStylePosition: 'inside' }}>
                {qualityItems.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
 
      {/* Our Infrastructure Section */}
      <section className="section-padding bg-surface">
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
          <motion.div 
            className="about-content-side"
            style={{ maxWidth: '800px', width: '100%' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <span className="badge">{t('infra_badge')}</span>
            <h2 className="section-title">{t('infra_title')} <span className="accent-text">{t('infra_title_span')}</span></h2>
            <p className="mt-20">{t('infra_p1')}</p>
            <p className="mt-10">{t('infra_p2')}</p>
            <div className="about-check-list mt-30">
               <div className="check-item">
                  <CheckCircle size={18} className="accent-text" />
                  <span>{t('infra_check1')}</span>
               </div>
               <div className="check-item">
                  <CheckCircle size={18} className="accent-text" />
                  <span>{t('infra_check2')}</span>
               </div>
               <div className="check-item">
                  <CheckCircle size={18} className="accent-text" />
                  <span>{t('infra_check3')}</span>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Areas of Operation Section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge">{t('about_operation_badge')}</span>
            <h2 className="section-title">
              {t('about_operation_title')} <span className="accent-text">{t('about_operation_title_span')}</span>
            </h2>
            <p className="text-muted mt-15" style={{ maxWidth: '600px', margin: '15px auto 0 auto' }}>
              {t('about_operation_desc')}
            </p>
          </div>

          <div className="about-cities-fullwidth">
            <h3 className="mb-20" style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: '1.25rem', color: 'var(--text-main)', textAlign: 'center' }}>
              {t('about_operation_subtitle')} ({cities.length} {lang === 'ta' ? 'நகரங்கள்' : 'Cities'})
            </h3>
            <div className="contact-cities-grid">
              {cities.map((city, idx) => (
                <div key={idx} className="contact-city-chip">
                  <span className="contact-city-dot"></span>
                  {city}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
