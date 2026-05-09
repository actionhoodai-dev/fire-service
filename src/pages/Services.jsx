import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Settings, Truck, Wrench, CheckCircle, Factory, ShieldAlert } from 'lucide-react';
import { Tilt } from 'react-tilt';
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
  const { t, lang } = useLanguage();

  const services = [
    {
      title: lang === 'ta' ? "தீ அணைப்பான் விநியோகம்" : "Fire Extinguisher Supply",
      desc: lang === 'ta' ? "தொழில்துறை, வணிக மற்றும் குடியிருப்பு பயன்பாட்டிற்கான சான்றளிக்கப்பட்ட தீ அணைப்பான்கள்." : "Delivering world-class, certified fire extinguishers perfectly suited for industrial, commercial, and residential use.",
      icon: <Truck size={32} />
    },
    {
      title: lang === 'ta' ? "தீ அணைப்பான் நிரப்புதல்" : "Fire Extinguisher Refilling",
      desc: lang === 'ta' ? "விரைவான தீ அடக்குதலுக்கான உயர்தர நிரப்புதல் முகவர்கள்." : "High-quality refilling agents matching stringent industry standards for rapid fire suppression.",
      icon: <Zap size={32} />
    },
    {
      title: lang === 'ta' ? "தீ அணைப்பான் சேவை" : "Fire Extinguisher Servicing",
      desc: lang === 'ta' ? "தகுதிவாய்ந்த தொழில்நுட்பவியலாளர்களால் கால உபகரண சேவை." : "Periodic servicing by qualified technicians to ensure your equipment is always ready.",
      icon: <Wrench size={32} />
    },
    {
      title: lang === 'ta' ? "உயர் அழுத்த சோதனை" : "High Pressure Testing",
      desc: lang === 'ta' ? "தீவிர நிலைகளில் கொள்கலன் ஒருமைப்பாட்டை உறுதிப்படுத்தும் சோதனை." : "Advanced hydrostatic testing ensuring container integrity under extreme conditions.",
      icon: <Shield size={32} />
    },
    {
      title: lang === 'ta' ? "தீ பாதுகாப்பு நிறுவல்" : "Fire Safety Equipment Installation",
      desc: lang === 'ta' ? "தீ பாதுகாப்பு குழாய்கள், ஹைட்ரன்ட்கள் மற்றும் முழு அமைப்புகளின் துல்லியமான நிறுவல்." : "Precision installation of fire safety pipelines, hydrants, and complete fire protection systems.",
      icon: <Settings size={32} />
    },
    {
      title: lang === 'ta' ? "ஆண்டு பராமரிப்பு ஒப்பந்தங்கள்" : "Annual Maintenance Contracts (AMC)",
      desc: lang === 'ta' ? "முழு மன அமைதிக்கான முழுமையான கால பராமரிப்பு." : "End-to-end periodic maintenance checks for complete peace of mind.",
      icon: <CheckCircle size={32} />
    },
    {
      title: lang === 'ta' ? "தொழில்துறை பாதுகாப்பு தீர்வுகள்" : "Industrial Safety Solutions",
      desc: lang === 'ta' ? "வெப்ப பாதுகாப்பு ஆடைகள், பாதுகாப்பு மழை மற்றும் வீழ்ச்சி தடுப்பு உபகரணங்கள்." : "We specialize in heat protective garments, safety showers, and fall protection gear specifically for industries.",
      icon: <ShieldAlert size={32} />
    }
  ];

  const industries = lang === 'ta' ? [
    "எஃகு & இரும்பு தொழில்கள்",
    "அனல் மின் நிலையங்கள்",
    "கட்டுமானம் & உள்கட்டமைப்பு",
    "பொறியியல் தொழில்கள்",
    "ஜவுளி & ஆடை தொழில்கள்",
    "இரசாயன தொழில்கள்",
    "அரசு துறை",
    "கல்வி நிறுவனங்கள்"
  ] : [
    "Steel & Iron Industries",
    "Thermal Power Plants",
    "Construction & Infrastructure",
    "Engineering Industries",
    "Textile & Garment Industries",
    "Chemical Industries",
    "Government Sector",
    "Educational Institutions"
  ];

  return (
    <div className="services-page pt-120">
      <section className="section-padding">
        <div className="section-header text-center">
          <span className="badge">{t('services_badge')}</span>
          <h1 className="section-title">{t('services_h1')} <span className="accent-text">{t('services_h1_span')}</span> {t('services_h1_end')}</h1>
          <p className="mt-20 text-muted mx-auto" style={{maxWidth: '600px'}}>
            {t('services_intro')}
          </p>
        </div>

        <div className="services-grid container mt-60">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Tilt className="service-card glass-card" options={{ max: 15, scale: 1.05 }}>
                <div className="service-icon-box">
                  {service.icon}
                </div>
                <h3 className="mt-20">{service.title}</h3>
                <p className="mt-10 text-muted">{service.desc}</p>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge">{t('industries_badge')}</span>
            <h2 className="section-title">{t('industries_title')} <span className="accent-text">{t('industries_title_span')}</span></h2>
          </div>
          <div className="process-cards mt-50">
            {industries.map((ind, i) => (
               <motion.div 
                 key={i}
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ delay: i * 0.05 }}
               >
                 <Tilt className="glass-card process-card-new text-center p-20" options={{ max: 15, scale: 1.05, style: { height: '100%' }}}>
                   <Factory size={24} className="accent-text mb-10 mx-auto" />
                   <h4 style={{fontSize: '1rem', fontWeight: 600}}>{ind}</h4>
                 </Tilt>
               </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section section-padding text-center">
        <div className="container">
          <h2>{t('cta_title')}</h2>
          <p className="mb-30 mx-auto mt-10 text-muted" style={{maxWidth: '500px'}}>{t('cta_desc')}</p>
          <a href="/contact" className="btn-primary btn-alive">{t('cta_btn')}</a>
        </div>
      </section>
    </div>
  );
};

export default Services;
