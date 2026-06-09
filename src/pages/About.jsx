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
  'Vellore', 'Krishnagiri', 'Dharmapuri', 'Salem', 'Erode', 
  'Nilgiris', 'Karur', 'Tiruvarur', 'Tirupattur', 'Coimbatore', 
  'Madurai', 'Trichy', 'Tirunelveli', 'Tuticorin', 'Thanjavur', 
  'Dindigul', 'Ramanathapuram', 'Pudukkottai', 'Nagercoil', 'Cuddalore',
  'Villupuram', 'Nagapattinam', 'Sivaganga', 'Virudhunagar', 'Theni'
];

const pinpoints = [
  { name: 'Chennai', x: '78%', y: '12%' },
  { name: 'Tiruvallur', x: '72%', y: '10%' },
  { name: 'Kanchipuram', x: '74%', y: '16%' },
  { name: 'Chengalpattu', x: '78%', y: '19%' },
  { name: 'Ranipet', x: '68%', y: '17%' },
  { name: 'Vellore', x: '64%', y: '19%' },
  { name: 'Krishnagiri', x: '52%', y: '22%' },
  { name: 'Dharmapuri', x: '48%', y: '30%' },
  { name: 'Salem', x: '52%', y: '40%' },
  { name: 'Erode', x: '38%', y: '48%' },
  { name: 'Nilgiris (Ooty)', x: '24%', y: '48%' },
  { name: 'Coimbatore', x: '28%', y: '58%' },
  { name: 'Tiruppur', x: '35%', y: '58%' },
  { name: 'Karur', x: '46%', y: '54%' },
  { name: 'Trichy', x: '56%', y: '55%' },
  { name: 'Thanjavur', x: '65%', y: '60%' },
  { name: 'Tiruvarur', x: '72%', y: '60%' },
  { name: 'Nagapattinam', x: '78%', y: '61%' },
  { name: 'Pudukkottai', x: '58%', y: '68%' },
  { name: 'Dindigul', x: '44%', y: '66%' },
  { name: 'Madurai', x: '48%', y: '73%' },
  { name: 'Theni', x: '36%', y: '74%' },
  { name: 'Sivaganga', x: '58%', y: '75%' },
  { name: 'Virudhunagar', x: '46%', y: '80%' },
  { name: 'Ramanathapuram', x: '68%', y: '81%' },
  { name: 'Tuticorin', x: '50%', y: '86%' },
  { name: 'Tirunelveli', x: '40%', y: '88%' },
  { name: 'Tenkasi', x: '32%', y: '87%' },
  { name: 'Kanyakumari', x: '36%', y: '95%' },
  { name: 'Nagercoil', x: '34%', y: '93%' }
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

          <div className="about-operation-grid">
            {/* Left Column: Cities List */}
            <div className="cities-list-box">
              <h3 className="mb-20" style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: '1.25rem', color: 'var(--text-main)' }}>
                {t('about_operation_subtitle')} ({cities.length} {lang === 'ta' ? 'நகரங்கள்' : 'Cities'})
              </h3>
              <div className="cities-list-container">
                {cities.map((city, idx) => (
                  <div key={idx} className="city-item-card">
                    {city}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Tamil Nadu Pinpoint Map */}
            <div className="map-visual-container glass-card">
              <svg viewBox="0 0 400 500" className="tn-map-svg" style={{ width: '100%', height: 'auto', maxHeight: '450px' }}>
                <path
                  d="M 195,38 L 225,40 L 255,42 L 285,47 L 298,52 L 308,60 L 318,75 L 322,95 L 328,110 L 332,122 L 328,140 L 320,165 L 314,190 L 305,210 L 290,225 L 278,245 L 274,265 L 280,285 L 282,305 L 274,325 L 260,345 L 245,370 L 232,390 L 222,410 L 210,430 L 195,455 L 190,470 L 180,478 L 172,468 L 170,450 L 174,430 L 176,415 L 165,400 L 150,392 L 135,385 L 125,370 L 120,350 L 122,330 L 124,312 L 118,300 L 105,290 L 90,282 L 72,275 L 58,268 L 48,258 L 52,242 L 68,225 L 82,210 L 98,198 L 108,180 L 106,160 L 104,142 L 108,125 L 120,105 L 138,82 L 152,65 Z"
                  fill="none"
                  stroke="var(--primary)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="drop-shadow(0 8px 16px rgba(230, 47, 16, 0.1))"
                />
              </svg>

              {/* Pinpoints overlay */}
              {pinpoints.map((pin, idx) => (
                <div
                  key={idx}
                  className="map-pinpoint"
                  style={{ left: pin.x, top: pin.y }}
                >
                  <div className="pin-ripple"></div>
                  <div className="pin-tooltip">{pin.name}</div>
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
