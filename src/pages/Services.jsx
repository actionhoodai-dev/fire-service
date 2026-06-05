import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Settings, Truck, Wrench, CheckCircle, Factory, ShieldAlert } from 'lucide-react';
import { Tilt } from 'react-tilt';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
  const { t, lang } = useLanguage();

  const services = [
    { title: t('svc_supply_title'), desc: t('svc_supply_desc'), icon: <Truck size={32} />, img: "/co2.png" },
    { title: t('svc_refill_title'), desc: t('svc_refill_desc'), icon: <Zap size={32} />, img: "/foam.png" },
    { title: t('svc_service_title'), desc: t('svc_service_desc'), icon: <Wrench size={32} />, img: "/clean_agent.png" },
    { title: t('svc_hptest_title'), desc: t('svc_hptest_desc'), icon: <Shield size={32} />, img: "/pressure_test.png" },
    { title: t('svc_install_title'), desc: t('svc_install_desc'), icon: <Settings size={32} />, img: "/hydrant.png" },
    { title: t('svc_amc_title'), desc: t('svc_amc_desc'), icon: <CheckCircle size={32} />, img: "/indian_team.png" },
    { title: t('svc_industrial_title'), desc: t('svc_industrial_desc'), icon: <ShieldAlert size={32} />, img: "/suit.png" },
  ];

  const industries = [
    t('ind_steel'), t('ind_thermal'), t('ind_construction'), t('ind_engineering'),
    t('ind_textile'), t('ind_chemical'), t('ind_government'), t('ind_education')
  ];

  return (
    <div className="services-page pt-120 animate-fade-in">
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
              <Tilt className="service-card glass-card" options={{ max: 15, scale: 1.03 }}>
                <div className="service-image-wrapper">
                  <img src={service.img} alt={service.title} className="service-card-img" />
                </div>
                <div style={{ padding: '25px 30px 30px' }}>
                  <div className="service-icon-box">
                    {service.icon}
                  </div>
                  <h3 className="mt-15">{service.title}</h3>
                  <p className="mt-10 text-muted">{service.desc}</p>
                </div>
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
          <Link to="/contact" className="btn-primary">{t('cta_btn')}</Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
