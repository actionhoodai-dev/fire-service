import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Award } from 'lucide-react';
import Hero3D from '../components/Hero3D';
import { Link } from 'react-router-dom';

const Home = () => {
  const stats = [
    { label: 'Safety Compliance', value: '100%' },
    { label: 'Years Experience', value: '15+' },
    { label: 'Certified Staff', value: '25+' },
    { label: 'Active Sites', value: '500+' }
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
            <Link to="/services" className="btn-outline">Our Services</Link>
          </div>
        </div>
      </section>

      {/* Everything below has a solid dark background */}
      <div className="post-hero-content">

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
              >
                <h3 className="stat-num">{stat.value}</h3>
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
