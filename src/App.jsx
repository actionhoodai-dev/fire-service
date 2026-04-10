import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Shield, CheckCircle, 
  ArrowRight, Download, Menu, X, 
  Flame, Settings, Zap, Award, Clock
} from 'lucide-react';
import './App.css';

// Components will be defined or imported here
const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <Flame className="logo-icon" />
          <div className="logo-text">
            <span className="brand-name">VARATHA VINAYAGAR</span>
            <span className="brand-sub">SAFETY & FIRE</span>
          </div>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact" className="footer-link">Contact</a>
        </div>

        <div className="nav-contact-brief">
          <a href="tel:6379321829" className="contact-item">
            <Phone size={16} />
            <span>63793 21829</span>
          </a>
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu glass-card">
          <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="#products" onClick={() => setIsMobileMenuOpen(false)}>Products</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          <div className="mobile-contact">
            <a href="tel:6379321829"><Phone size={18} /> Call Now</a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.1, 0.3], [50, 0]);

  return (
    <section id="home" className="hero-fullscreen">
      <motion.div 
        className="hero-visual-bg"
        style={{ scale, opacity }}
      >
        <div className="visual-overlay"></div>
        <img 
          src="/extinguisher.png" 
          alt="Fire Extinguisher" 
          className="hero-3d-img"
        />
        <div className="hero-title-overlay">
          <motion.h1 
            initial={{ letterSpacing: '20px', opacity: 0 }}
            animate={{ letterSpacing: '4px', opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="protection-text"
          >
            PROTECTION
          </motion.h1>
          <p className="scroll-hint">SCROLL TO EXPLORE</p>
        </div>
      </motion.div>

      <motion.div 
        className="hero-revealed-content"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="hero-text-box glass-card">
          <span className="badge">Varatha Vinayagar Safety & Fire</span>
          <h2>Complete <span className="glow-text">Fire Safety</span> Solutions</h2>
          <p>Service, Refilling & H.P. Testing. Tuticorin's trusted partner in safety since 2021.</p>
          <div className="hero-btns">
            <a href="tel:6379321829" className="btn-primary">Call Now</a>
            <a href="#contact" className="btn-outline">Get Quote</a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Services = () => {
  const services = [
    { icon: <Zap />, title: "Extinguisher Refilling", desc: "Expert refilling following strict safety protocols and standards." },
    { icon: <Settings />, title: "Extinguisher Servicing", desc: "Comprehensive maintenance and component checks for reliability." },
    { icon: <Shield />, title: "H.P. Testing", desc: "High-pressure hydrostatic testing to ensure vessel integrity." },
    { icon: <Flame />, title: "Equipment Supply", desc: "Distribution of certified fire safety hardware and gear." },
    { icon: <Award />, title: "Installation & Maintenance", desc: "Professional setup and recurring maintenance schedules." }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="section-header">
        <h2 className="section-title">Our <span className="accent-text">Services</span></h2>
        <div className="title-underline"></div>
      </div>
      <div className="services-grid">
        {services.map((s, i) => (
          <motion.div 
            key={i}
            className="glass-card service-card"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="service-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Products = () => {
  const products = [
    { title: "Fire Helmets", desc: "Impact-proof with thermal shielding", img: "/helmet.png" },
    { title: "Safety Gloves", desc: "High-heat resistant industrial grade", img: "https://images.unsplash.com/photo-1599407954153-61b47fb0661a?auto=format&fit=crop&q=80&w=800" },
    { title: "Breathing Apparatus", desc: "Advanced oxygen supply systems", img: "https://images.unsplash.com/photo-1610056671823-3a033ef46124?auto=format&fit=crop&q=80&w=800" },
    { title: "Safety Shoes", desc: "Steel-toe, anti-slip protection", img: "https://images.unsplash.com/photo-1629837084104-5d5184293881?auto=format&fit=crop&q=80&w=800" },
    { title: "Fire Safety Suits", desc: "Professional firefighting apparel", img: "https://images.unsplash.com/photo-1599408018332-9cb3d092497d?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <section id="products" className="section-padding bg-surface">
      <div className="section-header">
        <h2 className="section-title">Safety <span className="accent-text">Products</span></h2>
        <div className="title-underline"></div>
      </div>
      <div className="products-grid">
        {products.map((p, i) => (
          <motion.div 
            key={i}
            className="glass-card product-card"
            whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="product-visual">
              <img src={p.img} alt={p.title} className="product-img-fit" />
            </div>
            <div className="product-info">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="about-container">
        <div className="about-text">
          <span className="badge">About Us</span>
          <h2>Professionalism Meets <span className="glow-text">Reliability</span></h2>
          <p>
            Varatha Vinayagar Safety & Fire is a certified service provider in Tuticorin, dedicated to upholding the highest safety standards. With years of experience, we've built a reputation for fast service and uncompromising quality.
          </p>
          <div className="about-features">
            <div className="feature">
              <CheckCircle className="accent-text" /> 
              <div>
                <h4>Certified Provider</h4>
                <p>Fully compliant with industry-standard safety regulations.</p>
              </div>
            </div>
            <div className="feature">
              <Clock className="accent-text" />
              <div>
                <h4>Reliable & Fast</h4>
                <p>Quick turnaround times for refilling and servicing.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-stats glass-card">
          <div className="stat">
            <span className="stat-num">100%</span>
            <span className="stat-label">Safety Compliance</span>
          </div>
           <div className="stat">
            <span className="stat-num">24/7</span>
            <span className="stat-label">Availability</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="contact-grid">
        <div className="contact-info">
          <h2>Get in <span className="accent-text">Touch</span></h2>
          <p>Contact us for any fire safety needs or consultations.</p>
          
          <div className="contact-details">
            <div className="detail-item">
              <Phone className="primary-text" />
              <div className="contact-numbers-grid">
                <a href="tel:6379321829">63793 21829</a>
                <a href="tel:7200999660">72009 99660</a>
                <a href="tel:9944677149">99446 77149</a>
                <a href="tel:7200763674">72007 63674</a>
              </div>
            </div>
            <div className="detail-item">
              <Mail className="primary-text" />
              <p>varathavinayagar@gmail.com</p>
            </div>
            <div className="detail-item">
              <MapPin className="primary-text" />
              <p>112Q/3, Muthukrishnapuram 2nd Street, Tuticorin</p>
            </div>
          </div>

          <div className="gst-info glass-card">
            <span>GSTIN: 33FOCPP2123C1ZJ</span>
          </div>
        </div>

        <form className="glass-card contact-form">
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="form-group">
            <textarea placeholder="How can we help?" rows="4" required></textarea>
          </div>
          <button type="submit" className="btn-primary" style={{ width: '100%' }}>Send Message</button>
        </form>
      </div>
      
      <div className="map-container glass-card mt-20">
         <iframe 
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.712202728212!2d78.15088527399394!3d8.813084792333468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b03efe149ba4967%3A0xbf24fd03611dea1!2sVARATHA%20VINAYAGAR%20SAFETY%20%26%20FIRE%20SALES%20AND%20SERVICES!5e0!3m2!1sen!2sin!4v1775810818175!5m2!1sen!2sin" 
           width="100%" 
           height="100%" 
           style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }} 
           allowFullScreen="" 
           loading="lazy" 
           referrerPolicy="no-referrer-when-downgrade"
         ></iframe>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="logo">
            <Flame className="logo-icon" />
            <div className="logo-text">
              <span className="brand-name">VARATHA VINAYAGAR</span>
              <span className="brand-sub">SAFETY & FIRE</span>
            </div>
          </div>
          <p className="mt-10">Premium Fire Safety Solutions</p>
          <div className="gst-badge">GSTIN: 33FOCPP2123C1ZJ</div>
        </div>
        <div className="footer-links">
          <h4>Navigation</h4>
          <div className="footer-nav-list">
            <a href="#services">Services</a>
            <a href="#products">Products</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="footer-copy">
          <p>&copy; {new Date().getFullYear()} Varatha Vinayagar Safety & Fire. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="app">
      <div className="particle-background"></div>
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
