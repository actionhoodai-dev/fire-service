import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Settings, Truck, Wrench, CheckCircle, Factory, ShieldAlert } from 'lucide-react';
import { Tilt } from 'react-tilt';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Fire Extinguisher Supply",
      desc: "Delivering world-class, certified fire extinguishers perfectly suited for industrial, commercial, and residential use.",
      icon: <Truck size={32} />,
      img: "/co2.png"
    },
    {
      title: "Fire Extinguisher Refilling",
      desc: "High-quality refilling agents matching stringent industry standards for rapid fire suppression.",
      icon: <Zap size={32} />,
      img: "/foam.png"
    },
    {
      title: "Fire Extinguisher Servicing",
      desc: "Periodic servicing by qualified technicians to ensure your equipment is always ready.",
      icon: <Wrench size={32} />,
      img: "/clean_agent.png"
    },
    {
      title: "High Pressure Testing",
      desc: "Advanced hydrostatic testing ensuring container integrity under extreme conditions.",
      icon: <Shield size={32} />,
      img: "/pressure_test.png"
    },
    {
      title: "Fire Safety Equipment Installation",
      desc: "Precision installation of fire safety pipelines, hydrants, and complete fire protection systems.",
      icon: <Settings size={32} />,
      img: "/hydrant.png"
    },
    {
      title: "Annual Maintenance Contracts (AMC)",
      desc: "End-to-end periodic maintenance checks for complete peace of mind.",
      icon: <CheckCircle size={32} />,
      img: "/indian_team.png"
    },
    {
      title: "Industrial Safety Solutions",
      desc: "We specialize in heat protective garments, safety showers, and fall protection gear specifically for industries.",
      icon: <ShieldAlert size={32} />,
      img: "/suit.png"
    }
  ];

  const industries = [
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
    <div className="services-page pt-120 animate-fade-in">
      <section className="section-padding">
        <div className="section-header text-center">
          <span className="badge">Our Expertise</span>
          <h1 className="section-title">Complete <span className="accent-text">Safety</span> Services</h1>
          <p className="mt-20 text-muted mx-auto" style={{maxWidth: '600px'}}>
            We provide a comprehensive range of professional fire safety services to keep your environments fully protected.
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

      {/* Industries Served */}
      <section className="section-padding bg-surface">
        <div className="container">
          <div className="section-header text-center">
            <span className="badge">Where We Serve</span>
            <h2 className="section-title">Industries <span className="accent-text">Served</span></h2>
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
          <h2>Ready to secure your premises?</h2>
          <p className="mb-30 mx-auto mt-10 text-muted" style={{maxWidth: '500px'}}>Contact us today for an expert consultation and a tailored safety solution for your industry.</p>
          <Link to="/contact" className="btn-primary">Book Consultation</Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
