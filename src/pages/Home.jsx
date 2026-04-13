import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Award, FileDown } from 'lucide-react';
import Hero3D from '../components/Hero3D';
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

  return (
    <div className="home-page">
      {/* Hero Section - single viewport height, no sticky tricks */}
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
          <span className="badge">Varatha Vinayagar Safety & Fire</span>
          <h2>Complete <span className="glow-text">Fire Safety</span> Solutions</h2>
          <p>Tuticorin's premium partner for Refilling, Servicing & H.P. Testing. We don't just sell equipment; we sell peace of mind.</p>
          <div className="hero-btns">
            <Link to="/contact" className="btn-primary">Get Consultation</Link>
            <a href="https://github.com/actionhoodai-dev/fire-service/releases/download/assets/VARATHAVINAYAGAR.FIRE.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FileDown size={20} /> Download Brochure
            </a>
          </div>
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
