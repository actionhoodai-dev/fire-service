import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Zap, Award, FileDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

import { useInView } from 'framer-motion';

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

  // Multiple duplicates for extra wide screens and smoother infinite loop
  const duplicatedItems = [...categories, ...categories, ...categories, ...categories];

  return (
    <div className="category-section mt-60">
      <div className="section-header text-center mb-40">
        <span className="badge">Featured Categories</span>
        <h2 className="section-title-sm">Explore Our <span className="accent-text">Safety</span> Range</h2>
      </div>
      
      <div className="category-carousel-wrapper">
        <motion.div 
          className="category-carousel-track"
          drag="x"
          dragConstraints={{ left: -2000, right: 0 }}
          animate={{ x: ["0%", "-25%"] }} // Only shift by one set for infinite logic
          whileHover={{ animationPlayState: 'paused' }}
          transition={{ 
            duration: 40, 
            ease: "linear", 
            repeat: Infinity 
          }}
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
  const stats = [
    { label: 'Safety Compliance', end: 100, suffix: '%' },
    { label: 'Years Experience', end: 12, suffix: '+' },
    { label: 'Certified Staff', end: 25, suffix: '+' },
    { label: 'Active Sites', end: 500, suffix: '+' }
  ];

  const slidesData = [
    {
      id: 0,
      tagline: "Tuticorin's Premium Fire Safety Partner",
      title: "Advanced Fire",
      accent: "Extinguishers",
      desc: "Premium BIS-approved ABC Powder, CO₂, Foam & Clean Agent systems. Complete refilling, hydrostatic testing, and servicing with absolute standard compliance.",
      image: "/hero_extinguisher.png",
      alt: "Varatha Vinayagar Fire Extinguisher",
      cta1Text: "Explore Products",
      cta1Path: "/products",
      cta1State: { filter: "Fire Extinguishers" },
      cta2Text: "Get Consultation",
      cta2Path: "/contact",
      glowColor: "rgba(230, 47, 16, 0.42)",
      badgeBg: "rgba(230, 47, 16, 0.1)",
      badgeBorder: "rgba(230, 47, 16, 0.3)",
      themeColor: "var(--primary)"
    },
    {
      id: 1,
      tagline: "Precision Early-Warning Smoke Alerting",
      title: "Intelligent Alarm",
      accent: "Systems",
      desc: "State-of-the-art addressable panels, optical smoke detectors, rate-of-rise heat sensors, and automated gas release systems for early warning hazard protection.",
      image: "/hero_detector.png",
      alt: "Intelligent Smoke Alarm Systems",
      cta1Text: "View Systems",
      cta1Path: "/products",
      cta1State: { filter: "Fire Alarm Systems" },
      cta2Text: "Request Safety Audit",
      cta2Path: "/contact",
      glowColor: "rgba(245, 158, 11, 0.3)",
      badgeBg: "rgba(245, 158, 11, 0.1)",
      badgeBorder: "rgba(245, 158, 11, 0.35)",
      themeColor: "#facc15"
    },
    {
      id: 2,
      tagline: "Heavy-Duty Emergency Control Systems",
      title: "Hydrant & Suppression",
      accent: "Gear",
      desc: "High-pressure landing valves, 2-way/4-way fire hydrants, durable hose reel systems, heavy-duty foam monitors, and high trajectory water stream monitors.",
      image: "/hero_hydrant.png",
      alt: "Fire Hydrant Landing Valves",
      cta1Text: "Explore Hydrants",
      cta1Path: "/products",
      cta1State: { filter: "Hydrant & Fire Fighting" },
      cta2Text: "Get Free Quote",
      cta2Path: "/contact",
      glowColor: "rgba(59, 130, 246, 0.3)",
      badgeBg: "rgba(59, 130, 246, 0.1)",
      badgeBorder: "rgba(59, 130, 246, 0.35)",
      themeColor: "#3b82f6"
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
        <div className="hero-grid-bg"></div>
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

      {/* Everything below has a solid dark background */}
      <div className="post-hero-content">
        <CategoryCarousel />

        {/* About Overview Content */}
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
              <span className="badge">Welcome to Varatha Vinayagar</span>
              <h1 className="section-title">Your Trusted Partner in <span className="accent-text">Safety</span></h1>
              <p className="mt-20">We supply advanced fire extinguishers, hydrant accessories, personal protective equipment, and industrial safety products based in Tuticorin.</p>
              <p className="mt-10">Our products strictly follow high-quality standards, guaranteeing durability, and user-friendly design with a strong focus on absolute customer satisfaction.</p>
              
              <Link to="/about" className="btn-primary mt-30">Learn More About Us</Link>
            </motion.div>
          </div>
        </section>

        {/* Quick Stats */}
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

        {/* How We Work */}
        <section className="section-padding">
          <div className="container">
            <div className="section-header text-center">
              <span className="badge">Our Process</span>
              <h2 className="section-title">How We <span className="accent-text">Work</span></h2>
            </div>
            <div className="process-cards mt-40">
              {['Inspection', 'Collection', 'Execution', 'Delivery'].map((step, i) => (
                <motion.div 
                  key={i} 
                  className="glass-card process-card-new"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="step-number-glow">0{i+1}</div>
                  <h3>{step}</h3>
                  <p className="text-muted mt-10">
                    {i === 0 && "Thorough site assessment and hazard identification."}
                    {i === 1 && "Safe transport of equipment to our certified facility."}
                    {i === 2 && "Certified refill and high-pressure testing."}
                    {i === 3 && "Final quality check and prompt delivery."}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="section-padding bg-surface">
          <div className="container">
            <div className="section-header text-center">
              <span className="badge">Why Us</span>
              <h2 className="section-title">Reliability in Every <span className="accent-text">Second</span></h2>
            </div>
            <div className="why-us-grid-horizontal mt-50">
              <motion.div className="glass-card why-card" whileHover={{ y: -10 }}>
                <Shield className="accent-text mb-20" size={32} />
                <h3>Standard Compliance</h3>
                <p>Licensed by Industrial Safety Standards for full compliance.</p>
              </motion.div>
              <motion.div className="glass-card why-card" whileHover={{ y: -10 }}>
                <Zap className="accent-text mb-20" size={32} />
                <h3>24/7 Support</h3>
                <p>Round-the-clock emergency response for all safety needs.</p>
              </motion.div>
              <motion.div className="glass-card why-card" whileHover={{ y: -10 }}>
                <Award className="accent-text mb-20" size={32} />
                <h3>Certified Handling</h3>
                <p>Expert technicians with decades of collective experience.</p>
              </motion.div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Home;
