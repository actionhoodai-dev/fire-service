import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Zap, Award, Star, Quote } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useInView } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import DottedHeroBackground from '../components/DottedHeroBackground';

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
    { id: 1, name: "Fire Extinguishers", nameKey: 'cat_fire_extinguishers', img: "/extinguisher.png" },
    { id: 2, name: "Fire Alarm Systems", nameKey: 'cat_fire_alarm', img: "/detector.png" },
    { id: 3, name: "Hydrant & Fire Fighting", nameKey: 'cat_hydrant', img: "/hydrant.png" },
    { id: 4, name: "Safety Products (PPE)", nameKey: 'cat_ppe', img: "/helmet.png" },
    { id: 5, name: "Road Safety Products", nameKey: 'cat_road_safety', img: "/cone.jpg" },
    { id: 6, name: "Fire Suppression", nameKey: 'cat_suppression', img: "/clean_agent.png" }
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
                <span className="category-name-main">{t(item.nameKey)}</span>
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

  const complianceStat = { label: t('stat_compliance'), end: 100, suffix: '%' };

  const slidesData = [
    {
      id: 0,
      tagline: t('hero_slide0_tagline'),
      title: t('hero_slide0_title'),
      accent: t('hero_slide0_accent'),
      desc: t('hero_slide0_desc'),
      image: "/hero_extinguisher.png",
      alt: "Varatha Vinayagar Fire Extinguisher",
      cta1Text: t('hero_slide0_cta1'),
      cta1Path: "/products",
      cta1State: { filter: "Fire Extinguishers" },
      cta2Text: t('hero_slide0_cta2'),
      cta2Path: "/contact",
      glowColor: "rgba(230, 47, 16, 0.42)",
      badgeBg: "rgba(230, 47, 16, 0.1)",
      badgeBorder: "rgba(230, 47, 16, 0.3)",
      themeColor: "var(--primary)"
    },
    {
      id: 1,
      tagline: t('hero_slide1_tagline'),
      title: t('hero_slide1_title'),
      accent: t('hero_slide1_accent'),
      desc: t('hero_slide1_desc'),
      image: "/hero_detector.png",
      alt: "Intelligent Smoke Alarm Systems",
      cta1Text: t('hero_slide1_cta1'),
      cta1Path: "/products",
      cta1State: { filter: "Fire Alarm Systems" },
      cta2Text: t('hero_slide1_cta2'),
      cta2Path: "/contact",
      glowColor: "rgba(230, 47, 16, 0.42)",
      badgeBg: "rgba(230, 47, 16, 0.1)",
      badgeBorder: "rgba(230, 47, 16, 0.3)",
      themeColor: "var(--primary)"
    },
    {
      id: 2,
      tagline: t('hero_slide2_tagline'),
      title: t('hero_slide2_title'),
      accent: t('hero_slide2_accent'),
      desc: t('hero_slide2_desc'),
      image: "/hero_hydrant.png",
      alt: "Fire Hydrant Landing Valves",
      cta1Text: t('hero_slide2_cta1'),
      cta1Path: "/products",
      cta1State: { filter: "Hydrant & Fire Fighting" },
      cta2Text: t('hero_slide2_cta2'),
      cta2Path: "/contact",
      glowColor: "rgba(230, 47, 16, 0.42)",
      badgeBg: "rgba(230, 47, 16, 0.1)",
      badgeBorder: "rgba(230, 47, 16, 0.3)",
      themeColor: "var(--primary)"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slidesData.length]);

  const activeSlide = slidesData[currentSlide];

  return (
    <div className="home-page">
      {/* Hero Section - two column grid layout */}
      <section className="hero-section">
        <DottedHeroBackground themeColor={activeSlide.themeColor} />
        <div 
          className="hero-glow-bg"
          style={{ 
            background: `radial-gradient(circle at 75% 50%, ${activeSlide.glowColor} 0%, transparent 65%)`,
            transition: 'background 1s ease-in-out'
          }}
        ></div>
        
        {/* Background "PROTECTION" Text */}
        <div className="hero-title-overlay">
          <motion.h1 
            initial={{ letterSpacing: '40px', opacity: 0 }}
            animate={{ letterSpacing: '8px', opacity: 0.03 }}
            transition={{ duration: 2 }}
            className="protection-text"
          >
            PROTECTION
          </motion.h1>
        </div>

        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
          <div className="hero-container container">
            {/* Left Text Content Column */}
            <div className="hero-text-content">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentSlide}
                  initial={{ opacity: 0, x: -35 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 35 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  style={{ width: '100%' }}
                >
                  <div className="hero-tagline-sub-wrapper">
                    <span 
                      className="badge hero-tagline-sub"
                      style={{ 
                        background: activeSlide.badgeBg,
                        borderColor: activeSlide.badgeBorder,
                        color: activeSlide.themeColor,
                        transition: 'all 0.5s ease'
                      }}
                    >
                      {activeSlide.tagline}
                    </span>
                  </div>
                  
                  <h1 className="hero-business-title">
                    {activeSlide.title} <span className="glow-text" style={{ textShadow: `0 0 35px ${activeSlide.glowColor}`, color: activeSlide.themeColor }}>{activeSlide.accent}</span>
                  </h1>
                  
                  <p className="hero-desc">
                    {activeSlide.desc}
                  </p>
                  
                  <div className="hero-btns">
                    <Link 
                      to={activeSlide.cta1Path} 
                      state={activeSlide.cta1State}
                      className="btn-primary"
                      style={{ 
                        background: activeSlide.themeColor, 
                        borderColor: activeSlide.themeColor,
                        boxShadow: `0 8px 25px ${activeSlide.glowColor}`
                      }}
                    >
                      {activeSlide.cta1Text}
                    </Link>
                    <Link 
                      to={activeSlide.cta2Path} 
                      className="btn-outline"
                    >
                      {activeSlide.cta2Text}
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Image Visual Column */}
            <div className="hero-image-content">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.82, rotate: -2, y: 15 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
                  exit={{ opacity: 0, scale: 0.82, rotate: 2, y: -15 }}
                  transition={{ 
                    duration: 0.6, 
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.15 /* Staggered delay for high-end feel */
                  }}
                  style={{ 
                    width: '100%', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center' 
                  }}
                >
                  <img 
                    src={activeSlide.image} 
                    alt={activeSlide.alt} 
                    className="hero-extinguisher-img" 
                    style={{ 
                      filter: `drop-shadow(0 25px 50px rgba(0, 0, 0, 0.8)) drop-shadow(0 0 50px ${activeSlide.glowColor})`
                    }}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Slide Indicators / Navigation Controls */}
        <div className="hero-indicators">
          {slidesData.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(idx)}
              className={`hero-indicator-dot ${currentSlide === idx ? 'active' : ''}`}
              aria-label={`Go to slide ${idx + 1}`}
            >
              {currentSlide === idx && (
                <motion.div 
                  className="hero-indicator-progress"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 6, ease: 'linear' }}
                  style={{ background: slide.themeColor }}
                />
              )}
            </button>
          ))}
        </div>
      </section>

      <div className="post-hero-content">

        {/* Authorised Partners Strip — right below hero */}
        <section className="section-padding bg-surface" style={{ padding: '50px 0' }}>
          <div className="section-header text-center mb-40" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span className="badge">{t('home_partners_badge')}</span>
            <h2 className="section-title-sm">{t('home_partners_title')} <span className="accent-text">{t('home_partners_title_span')}</span></h2>
          </div>
          <div className="partner-carousel-wrapper">
            <motion.div
              className="partner-carousel-track"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 45, ease: "linear", repeat: Infinity }}
            >
              <div className="partner-strip"><img src="/partners_strip.png" alt="Authorised Partner Brands" /></div>
              <div className="partner-strip"><img src="/partners_strip.png" alt="Authorised Partner Brands" /></div>
            </motion.div>
          </div>
        </section>

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
              <div className="glass-card about-logo-card about-logo-wrapper">
    <img src="/logo.png" alt="Business Logo" />
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
          <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
            <motion.div 
              className="stat-box glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              style={{ maxWidth: '320px', width: '100%', textAlign: 'center' }}
            >
              <h3 className="stat-num" style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary)' }}>
                <Counter end={complianceStat.end} suffix={complianceStat.suffix} />
              </h3>
              <p className="stat-label">{complianceStat.label}</p>
            </motion.div>
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

        {/* Testimonials Section */}
        <section className="section-padding">
          <div className="container">
            <div className="section-header text-center">
              <span className="badge">{t('home_testimonials_badge')}</span>
              <h2 className="section-title">{t('home_testimonials_title')} <span className="accent-text">{t('home_testimonials_title_span')}</span> {t('home_testimonials_title_end')}</h2>
            </div>
            <div className="testimonials-grid mt-50">
              {[
                { name: 'Rajesh Kumar', role: 'Safety Manager, Steel Plant', text: 'Varatha Vinayagar has been our go-to partner for fire extinguisher refilling for over 5 years. Always on time, always certified. Highly recommended!', stars: 5 },
                { name: 'Meena Sundaram', role: 'Factory Owner, Textile Industry', text: 'The team serviced all 80 of our extinguishers in a single day with zero disruption to operations. Exceptional speed and professionalism.', stars: 5 },
                { name: 'Arjun Pillai', role: 'HSE Officer, Chemical Plant', text: 'Their high-pressure testing and AMC services are thorough and well-documented. Compliance audits have never been easier thanks to VV Safety.', stars: 5 },
                { name: 'Priya Nataraj', role: 'Principal, Educational Institution', text: 'Quick response, quality products, and staff who truly understand safety. Our campus is fully protected because of Varatha Vinayagar.', stars: 5 },
                { name: 'Siva Raman', role: 'Procurement Head, Construction Group', text: 'From hydrant systems to PPE equipment — complete one-stop procurement. Competitive pricing with no compromise on product quality.', stars: 5 },
                { name: 'Deepa Krishnaswamy', role: 'Admin Manager, Government Hospital', text: 'Installed all fire alarm panels across 3 buildings flawlessly. The team is knowledgeable, courteous, and completed ahead of schedule.', stars: 5 },
              ].map((review, i) => (
                <motion.div
                  key={i}
                  className="testimonial-card glass-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                >
                  <Quote size={28} className="testimonial-quote-icon" />
                  <p className="testimonial-text">"{review.text}"</p>
                  <div className="testimonial-stars">
                    {[...Array(review.stars)].map((_, s) => (
                      <Star key={s} size={14} fill="#facc15" color="#facc15" />
                    ))}
                  </div>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{review.name.charAt(0)}</div>
                    <div>
                      <div className="testimonial-name">{review.name}</div>
                      <div className="testimonial-role">{review.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Home;
