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

const About = () => {
  const { t, lang } = useLanguage();

  const visionItems = lang === 'ta' 
    ? ['முழுமையான பாதுகாப்பு அமைப்புகள்', 'மேம்பட்ட தொழில்நுட்ப தீர்வுகள்', 'தொடர்ச்சியான மேம்பாடு', 'வாடிக்கையாளர் கவனம்']
    : ['Complete safety systems and services', 'Advanced technology-based solutions', 'Continuous improvement and innovation', 'Strong customer-focused approach'];

  const missionItems = lang === 'ta'
    ? ['இந்தியாவின் பாதுகாப்பு துறையில் முதலிடம்', 'புதுமை, தரம் மற்றும் சேவை சிறப்பு', 'பாதுகாப்பு விழிப்புணர்வை ஊக்குவித்தல்', 'உயர் மதிப்பு பொருட்கள் வழங்கல்']
    : ['Achieve top position in India\'s safety industry', 'Focus on innovation, quality, and service excellence', 'Promote safety awareness and responsibility', 'Deliver high-value products and solutions'];

  const qualityItems = lang === 'ta'
    ? ['வடிவமைப்பு முதல் சோதனை வரை தர கட்டுப்பாடு', 'மேம்பட்ட தொழில்நுட்பம்', 'திறமையான நிபுணர்கள்', 'வாடிக்கையாளர் கேந்திர அணுகுமுறை']
    : ['Strict quality control from design to testing', 'Advanced technology integration', 'Skilled professionals and experienced team', 'Customer-centric service approach'];

  const visionDesc = lang === 'ta' ? 'மிகவும் மதிப்புமிக்க பாதுகாப்பு தீர்வு வழங்குநராக மாறுவது:' : 'To become a highly respected safety solutions provider delivering:';
  const missionDesc = lang === 'ta' ? 'சிறப்பை நோக்கி உந்தும்:' : 'Driving excellence via:';
  const qualityDesc = lang === 'ta' ? 'தரத்தை உறுதிப்படுத்துகிறோம்:' : 'We ensure quality through:';

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
               <img src="/indian_team.png" alt="Indian Safety Engineers Team" />
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
    </div>
  );
};

export default About;
