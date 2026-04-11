import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Zap, Shield, Flame, Award, Drill } from 'lucide-react';
import { Tilt } from 'react-tilt';

const Services = () => {
  const services = [
    { 
      icon: <Zap />, 
      title: "Extinguisher Refilling", 
      desc: "Fast and certified refilling of all types of fire extinguishers including ABC, CO2, and Water based." 
    },
    { 
      icon: <Settings />, 
      title: "Extinguisher Servicing", 
      desc: "Regular maintenance and component replacement to ensure your equipment never fails when needed." 
    },
    { 
      icon: <Shield />, 
      title: "H.P. Testing", 
      desc: "High-Pressure hydrostatic testing to verify the structural integrity of gas cylinders and vessels." 
    },
    { 
      icon: <Flame />, 
      title: "Equipment Supply", 
      desc: "Wholesale and retail supply of fire safety hardware, alarms, and industrial protection gear." 
    },
    { 
      icon: <Award />, 
      title: "Installation", 
      desc: "Professional placement and mounting of extinguishers as per fire safety norms and regulations." 
    },
    { 
      icon: <Drill />, 
      title: "Annual Maintenance", 
      desc: "Worry-free annual contracts (AMC) for commercial and industrial buildings in Tuticorin." 
    }
  ];

  return (
    <div className="services-page pt-120">
      <section className="section-padding">
        <div className="section-header text-center">
          <span className="badge">Professional Care</span>
          <h1 className="section-title">Our <span className="accent-text">Service</span> Portfolio</h1>
          <p className="max-w-600 mx-auto">Providing end-to-end fire safety solutions with certified professionals and state-of-the-art testing equipment.</p>
        </div>
        
        <div className="services-grid container mt-60">
          {services.map((s, i) => (
            <Tilt key={i} options={{ max: 15, scale: 1.05 }}>
              <motion.div 
                className="glass-card service-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-surface">
        <div className="container">
          <h2 className="text-center mb-60">How We <span className="glow-text">Work</span></h2>
          <div className="process-cards">
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
    </div>
  );
};

export default Services;
