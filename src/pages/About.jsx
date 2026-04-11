import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Users, Settings, Award, CheckCircle, Eye, Rocket, ThumbsUp } from 'lucide-react';

const About = () => {
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
               <img src="/indian_team.png" alt="Indian Safety Engineers Team" />
            </div>
          </motion.div>

          <motion.div 
            className="about-content-side"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="badge">Our Company Profile</span>
            <h1 className="section-title">Varatha Vinayagar <span className="accent-text">Safety & Fire</span></h1>
            <p className="mt-20">We supply fire extinguishers, hydrant accessories, personal protective equipment, and industrial safety products based in Tuticorin. We specialize in industrial heat protective garments, fall protection systems, and safety shower systems.</p>
            <p className="mt-10">Our products follow high-quality standards, durability, and user-friendly design with a strong focus on customer satisfaction and fast service delivery.</p>
            
            <div className="about-check-list mt-30">
               <div className="check-item">
                  <CheckCircle size={18} className="accent-text" />
                  <span>Strict quality control from design to testing</span>
               </div>
               <div className="check-item">
                  <CheckCircle size={18} className="accent-text" />
                  <span>Advanced technology integration</span>
               </div>
               <div className="check-item">
                  <CheckCircle size={18} className="accent-text" />
                  <span>Skilled professionals and experienced team</span>
               </div>
               <div className="check-item">
                  <CheckCircle size={18} className="accent-text" />
                  <span>Customer-centric service approach</span>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision, Mission, Quality */}
      <section className="section-padding bg-surface">
        <div className="container">
          <div className="values-grid">
            <motion.div className="glass-card value-card" whileHover={{ y: -5 }}>
              <div className="value-icon"><Eye size={30} /></div>
              <h3>Our Vision</h3>
              <p>To become a highly respected safety solutions provider delivering:</p>
              <ul className="text-muted mt-10" style={{ listStylePosition: 'inside' }}>
                <li>Complete safety systems and services</li>
                <li>Advanced technology-based solutions</li>
                <li>Continuous improvement and innovation</li>
                <li>Strong customer-focused approach</li>
              </ul>
            </motion.div>

            <motion.div className="glass-card value-card" whileHover={{ y: -5 }}>
              <div className="value-icon"><Rocket size={30} /></div>
              <h3>Our Mission</h3>
              <p>Driving excellence via:</p>
              <ul className="text-muted mt-10" style={{ listStylePosition: 'inside' }}>
                <li>Achieve top position in India's safety industry</li>
                <li>Focus on innovation, quality, and service excellence</li>
                <li>Promote safety awareness and responsibility</li>
                <li>Deliver high-value products and solutions</li>
              </ul>
            </motion.div>

            <motion.div className="glass-card value-card" whileHover={{ y: -5 }}>
              <div className="value-icon"><ThumbsUp size={30} /></div>
              <h3>Quality Policy</h3>
              <p>We ensure quality through:</p>
              <ul className="text-muted mt-10" style={{ listStylePosition: 'inside' }}>
                <li>Strict quality control from design to testing</li>
                <li>Advanced technology integration</li>
                <li>Skilled professionals and experienced team</li>
                <li>Customer-centric service approach</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
