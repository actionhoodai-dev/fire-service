import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Award, FileDown } from 'lucide-react';
import Hero3D from '../components/Hero3D';
import { Link, useNavigate } from 'react-router-dom';
import { useInView } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Counter = ({ end, suffix }) => {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, end]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const CategoryCarousel = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const categories = [
    { id: 1, name: "Fire Extinguishers", img: "/extinguisher.png" },
    { id: 2, name: "Fire Alarm Systems", img: "/detector.png" },
    { id: 3, name: "Hydrant & Fire Fighting", img: "/hydrant.png" },
    { id: 4, name: "Safety Products (PPE)", img: "/helmet.png" },
    { id: 5, name: "Road Safety Products", img: "/cone.jpg" },
    { id: 6, name: "Fire Suppression", img: "/clean_agent.png" }
  ];

  const handleCategoryClick = (catName) => {
    navigate('/products', { state: { filter: catName } });
  };

  const duplicatedItems = [...categories, ...categories, ...categories, ...categories];

  return (
    <div className="category-section mt-60">
      <div className="section-header text-center mb-40">
        <span className="badge">{t('home_cat_badge')}</span>
        <h2 className="section-title-sm">{t('home_cat_title')} <span className="accent-text">{t('home_cat_title_span')}</span> {t('home_cat_title_end')}</h2>
      </div>
      <div className="category-carousel-wrapper">
        <motion.div 
          className="category-carousel-track"
          drag="x"
          dragConstraints={{ left: -2000, right: 0 }}
          animate={{ x: ["0%", "-25%"] }}
          whileHover={{ animationPlayState: 'paused' }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {duplicatedItems.map((item, i) => (
            <div 
              key={i} 
              onClick={() => handleCategoryClick(item.name)} 
              className="category-story-item pointer-events-auto"
            >
              <div className="category-circle-wrapper">
                <div className="category-circle-border"></div>
                <div className="category-circle-inner glass-card">
                  <img src={item.img} alt={item.name} />
                </div>
              </div>
              <div className="category-info text-center mt-15">
                <span className="category-name-main">{item.name}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const Home = () => {
  const { t } = useLanguage();

  const stats = [
    { label: t('stat_compliance'), end: 100, suffix: '%' },
    { label: t('stat_experience'), end: 12, suffix: '+' },
    { label: t('stat_staff'), end: 25, suffix: '+' },
    { label: t('stat_sites'), end: 500, suffix: '+' }
  ];

  return (
    <div className="home-page">
      <section className="hero-section">
        <Hero3D />
        <div className="visual-overlay"></div>
        <div className="hero-title-overlay">
          <motion.h1 
            initial={{ letterSpacing: '40px', opacity: 0 }}
            animate={{ letterSpacing: '8px', opacity: 1 }}
            transition={{ duration: 2 }}
            className="protection-text"
          >
            PROTECTION
          </motion.h1>
        </div>
        <div className="hero-bottom-content">
          <span className="badge">{t('home_badge')}</span>
          <h2>{t('home_hero_h2')} <span className="glow-text">{t('home_hero_h2_span')}</span> {t('home_hero_h2_end')}</h2>
          <p>{t('home_hero_p')}</p>
          <div className="hero-btns">
            <Link to="/contact" className="btn-primary btn-alive">{t('home_btn_consultation')}</Link>
            <a href="https://github.com/actionhoodai-dev/fire-service/releases/download/assets/VARATHAVINAYAGAR.FIRE.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline btn-alive" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FileDown size={20} /> {t('home_btn_brochure')}
            </a>
          </div>
        </div>
      </section>

      <div className="post-hero-content">
        <CategoryCarousel />

        <section className="section-padding">
          <div className="container grid-2">
            <motion.div 
              className="about-visual-box relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <div className="logo-display-circular glass-card">
                <img src="/logo.png" alt="Varatha Vinayagar Business Logo" />
              </div>
            </motion.div>

            <motion.div 
              className="about-content-side"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <span className="badge">{t('home_about_badge')}</span>
              <h1 className="section-title">{t('home_about_h1')} <span className="accent-text">{t('home_about_h1_span')}</span></h1>
              <p className="mt-20">{t('home_about_p1')}</p>
              <p className="mt-10">{t('home_about_p2')}</p>
              <Link to="/about" className="btn-primary btn-alive mt-30">{t('home_about_btn')}</Link>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-surface">
          <div className="stats-grid container">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                className="stat-box glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="stat-num" style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary)' }}>
                  <Counter end={stat.end} suffix={stat.suffix} />
                </h3>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="section-padding">
          <div className="container">
            <div className="section-header text-center">
              <span className="badge">{t('home_process_badge')}</span>
              <h2 className="section-title">{t('home_process_title')} <span className="accent-text">{t('home_process_title_span')}</span></h2>
            </div>
            <div className="process-cards mt-40">
              {[
                { key: 'step_inspection', descKey: 'step_inspection_desc' },
                { key: 'step_collection', descKey: 'step_collection_desc' },
                { key: 'step_execution', descKey: 'step_execution_desc' },
                { key: 'step_delivery', descKey: 'step_delivery_desc' },
              ].map((step, i) => (
                <motion.div 
                  key={i} 
                  className="glass-card process-card-new"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="step-number-glow">0{i+1}</div>
                  <h3>{t(step.key)}</h3>
                  <p className="text-muted mt-10">{t(step.descKey)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-surface">
          <div className="container">
            <div className="section-header text-center">
              <span className="badge">{t('home_why_badge')}</span>
              <h2 className="section-title">{t('home_why_title')} <span className="accent-text">{t('home_why_title_span')}</span></h2>
            </div>
            <div className="why-us-grid-horizontal mt-50">
              <motion.div className="glass-card why-card" whileHover={{ y: -10 }}>
                <Shield className="accent-text mb-20" size={32} />
                <h3>{t('why_compliance')}</h3>
                <p>{t('why_compliance_desc')}</p>
              </motion.div>
              <motion.div className="glass-card why-card" whileHover={{ y: -10 }}>
                <Zap className="accent-text mb-20" size={32} />
                <h3>{t('why_support')}</h3>
                <p>{t('why_support_desc')}</p>
              </motion.div>
              <motion.div className="glass-card why-card" whileHover={{ y: -10 }}>
                <Award className="accent-text mb-20" size={32} />
                <h3>{t('why_certified')}</h3>
                <p>{t('why_certified_desc')}</p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
