import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Users, Clock, Award, CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    { icon: <Shield />, title: "Safety First", desc: "Our primary mission is protecting lives and property through uncompromising safety standards." },
    { icon: <Target />, title: "Precision", desc: "Every refill and every test is executed with surgical precision and certified accuracy." },
    { icon: <Users />, title: "Community", desc: "As a Tuticorin-based business, we take pride in safeguarding our local community and industries." },
    { icon: <Clock />, title: "24/7 Support", desc: "Fire doesn't sleep, and neither do we. Our emergency response team is always ready." }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

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
               <img src="/team.png" alt="Safety Team" />
               <div className="card-overlay-abs">
                  <div className="years-badge">
                     <span>4+</span> Years of Excellence
                  </div>
               </div>
            </div>
          </motion.div>

          <motion.div 
            className="about-content-side"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="badge">Who We Are</span>
            <h1 className="section-title">Trusted Partner in <span className="glow-text">Fire Safety</span></h1>
            <p className="mt-20 text-muted">Varatha Vinayagar Safety & Fire was founded with a single mission: to bring world-class fire protection services to Tuticorin. We specialize in high-pressure testing, certified refilling, and comprehensive safety auditing.</p>
            
            <div className="about-check-list mt-30">
               <div className="check-item">
                  <CheckCircle size={18} className="accent-text" />
                  <span>Licensed by Industrial Safety Standards</span>
               </div>
               <div className="check-item">
                  <CheckCircle size={18} className="accent-text" />
                  <span>Certified Equipment & Testing Gear</span>
               </div>
               <div className="check-item">
                  <CheckCircle size={18} className="accent-text" />
                  <span>Expert Technicians with 10+ Years Experience</span>
               </div>
            </div>

            <button className="btn-primary mt-40">Download Company Profile</button>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-surface">
        <div className="container">
          <h2 className="text-center mb-60">Our Core <span className="glow-text">Values</span></h2>
          <motion.div 
            className="values-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            {values.map((v, i) => (
              <motion.div key={i} className="glass-card value-card" variants={itemVariants}>
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding achievements-section">
         <div className="container text-center">
            <h2 className="mb-60">Certified for <span className="accent-text">Safety</span></h2>
            <div className="certification-grid">
               <div className="cert-card glass-card">
                  <Award size={40} className="glow-text mb-10" />
                  <p>ISO 9001:2015</p>
               </div>
               <div className="cert-card glass-card">
                  <Shield size={40} className="glow-text mb-10" />
                  <p>Fire Safety Board</p>
               </div>
               <div className="cert-card glass-card">
                  <Users size={40} className="glow-text mb-10" />
                  <p>500+ Clients</p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default About;
