import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ChevronRight, Filter, ShieldAlert, Droplet, BellRing, Settings, TriangleAlert, Activity, CheckCircle } from 'lucide-react';
import { Tilt } from 'react-tilt';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Products = () => {
  const location = useLocation();
  const { t, lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(location.state?.filter || 'All');

  React.useEffect(() => {
    if (location.state?.filter) setActiveCategory(location.state.filter);
  }, [location.state]);

  const categories = ['All', 'Fire Extinguishers', 'Fire Alarm Systems', 'Hydrant & Fire Fighting', 'Safety Products (PPE)', 'Road Safety Products'];

  const catLabels = lang === 'ta' ? {
    'All': 'அனைத்தும்',
    'Fire Extinguishers': 'தீ அணைப்பான்கள்',
    'Fire Alarm Systems': 'தீ எச்சரிக்கை அமைப்புகள்',
    'Hydrant & Fire Fighting': 'ஹைட்ரன்ட் & தீயணைப்பு',
    'Safety Products (PPE)': 'பாதுகாப்பு பொருட்கள்',
    'Road Safety Products': 'சாலை பாதுகாப்பு'
  } : {};

  const getCatLabel = (cat) => catLabels[cat] || cat;

  const productsData = [
    { name: "Powder Type (ABC)", category: "Fire Extinguishers", img: "/extinguisher.png", desc: "Multi-purpose dry chemical.", icon: <Droplet size={80} />, features: ["Mono Ammonium Phosphate based", "Suitable for Class A, B, C & Electrical", "BIS Approved (IS 15683)", "CE Certified (on demand)", "Rechargeable, brass/nickel valve"] },
    { name: "CO₂ Type", category: "Fire Extinguishers", img: "/co2.png", desc: "Safe for electrical fires.", icon: <Droplet size={80} />, features: ["Colorless, odorless, non-toxic gas", "No residue after discharge", "Rapid fire knockdown", "Seamless steel body", "BIS Approved & CE Certified"] },
    { name: "Foam & Water Type", category: "Fire Extinguishers", img: "/foam.png", desc: "For solid and liquid fires.", icon: <Droplet size={80} />, features: ["AFFF foam for Class A & B fires", "Water type for Class A fires", "Spray nozzle for control", "High-quality coating", "Rechargeable with flexible hose"] },
    { name: "Clean Agent (FE-36)", category: "Fire Extinguishers", img: "/clean_agent.png", desc: "Leaves no residue.", icon: <Droplet size={80} />, features: ["Uses FE-36 clean agent", "Zero Ozone Depletion", "Electrically non-conductive", "Protects sensitive equipment", "Unique Gauge Testing System"] },
    { name: "Kitchen Fire Extinguishers", category: "Fire Extinguishers", img: "/kitchen.png", desc: "Specialized for oils/fats.", icon: <Droplet size={80} />, features: ["Designed for cooking oil fires", "Creates stable foam layer", "Safe for kitchen appliances", "Minimal equipment damage", "Effective for high-temp oils"] },
    { name: "D-Class Metal Fire Extinguishers", category: "Fire Extinguishers", img: "/d_class.jpg", desc: "For combustible metals.", icon: <Droplet size={80} />, features: ["Designed for metal fires", "Keeps operator at safe distance", "Non-dispersing agent", "Controlled discharge", "Durable hose system"] },
    { name: "Digital Addressable Fire Alarm Panels", category: "Fire Alarm Systems", img: "/panel.jpg", desc: "Precision fire locating panels.", icon: <Activity size={80} />, features: ["Microprocessor-based systems", "Digitally addressable zones", "Real-time fire detection", "Reliable and fast alert system", "Integration with detectors"] },
    { name: "Smoke Detectors", category: "Fire Alarm Systems", img: "/detector.png", desc: "Early warning smoke sensing.", icon: <BellRing size={80} />, features: ["High-sensitivity optical sensing", "Early warning fire detection", "Low power consumption", "LED status indicators", "Easy maintenance"] },
    { name: "Heat Detectors", category: "Fire Alarm Systems", img: "/detector.png", desc: "Triggered by temperature spikes.", icon: <BellRing size={80} />, features: ["Rate-of-rise thermal detection", "Fixed temperature activation", "High reliability in dusty areas", "False alarm prevention", "Industrial-grade durability"] },
    { name: "Manual Call Points", category: "Fire Alarm Systems", img: "/call_point.jpg", desc: "Manual emergency triggers.", icon: <BellRing size={80} />, features: ["Break-glass or resettable types", "High visibility red casing", "Instant alarm activation", "Simple push operated", "Weather-proof options"] },
    { name: "Gas Release Systems", category: "Fire Alarm Systems", img: "/gas_release.jpg", desc: "Automated suppression release.", icon: <Settings size={80} />, features: ["Fully automatic operation", "Quick detection and suppression", "No external power required", "Non-toxic & eco-friendly", "Works during power failure"] },
    { name: "Landing Valves", category: "Hydrant & Fire Fighting", img: "/hydrant.png", desc: "High pressure control valves.", icon: <Settings size={80} />, features: ["High-pressure handling", "Durable gunmetal construction", "Reliable water flow control", "Corrosion-resistant", "Designed for industrial use"] },
    { name: "Fire Hydrants (2-way / 4-way)", category: "Hydrant & Fire Fighting", img: "/hydrant.png", desc: "High capacity water delivery.", icon: <Settings size={80} />, features: ["Multi-outlet configurations", "High capacity water flow", "Weather-proof construction", "Easy installation", "Durable structural integrity"] },
    { name: "Hose Reel Systems", category: "Hydrant & Fire Fighting", img: "/hose_reel.jpg", desc: "Rapid deployment water hoses.", icon: <Settings size={80} />, features: ["High-strength polyester jacket", "Heat and abrasion resistant", "Smooth inner lining", "Conforms to international standards", "Easy handling and deployment"] },
    { name: "Foam Monitor Systems", category: "Hydrant & Fire Fighting", img: "/foam_monitor.jpg", desc: "Heavy-duty foam deployment.", icon: <Settings size={80} />, features: ["Heavy-duty foam concentration", "Long-range projection", "Adjustable flow rate", "Corrosion-free nozzles", "Petrochemical application ready"] },
    { name: "Water Monitors", category: "Hydrant & Fire Fighting", img: "/water_monitor.jpg", desc: "High trajectory water streams.", icon: <Settings size={80} />, features: ["High trajectory stream", "360-degree rotation", "Fixed or portable configurations", "Durable steel housing", "Industrial hazard ready"] },
    { name: "Head Protection", category: "Safety Products (PPE)", img: "/helmet.png", desc: "Industrial safety helmets.", icon: <ShieldAlert size={80} />, features: ["High-impact resistance", "Comfortable chin straps", "Ventilated designs", "Industry-grade materials", "Complete safety coverage"] },
    { name: "Eye & Face Protection", category: "Safety Products (PPE)", img: "/suit.png", desc: "Goggles and face shields.", icon: <ShieldAlert size={80} />, features: ["Anti-scratch and anti-fog", "UV protection", "Wide field of vision", "Chemical splash resistant", "Impact durable"] },
    { name: "Respiratory Protection", category: "Safety Products (PPE)", img: "/apparatus.png", desc: "Masks and breathing apparatus.", icon: <ShieldAlert size={80} />, features: ["N95 to full-face respirators", "Self-contained breathing apparatus", "Efficient particulate filtration", "Comfortable prolonged wear", "Toxic gas protection"] },
    { name: "Hand Gloves", category: "Safety Products (PPE)", img: "/gloves.png", desc: "Heat and chemical resistant.", icon: <ShieldAlert size={80} />, features: ["Cut and abrasion resistant", "High-heat and electrical proof", "Chemical handling safety", "Enhanced grip", "Industrial compliance"] },
    { name: "Safety Shoes", category: "Safety Products (PPE)", img: "/shoes.png", desc: "Reinforced industrial footwear.", icon: <ShieldAlert size={80} />, features: ["Steel-toe reinforcement", "Anti-slip and oil-resistant", "Electrical hazard protection", "Puncture-resistant soles", "Ergonomic arch support"] },
    { name: "Fall Protection Equipment", category: "Safety Products (PPE)", img: "/suit.png", desc: "Harnesses and safety lines.", icon: <ShieldAlert size={80} />, features: ["Full-body safety harnesses", "Shock-absorbing lanyards", "High-tensile strength ropes", "Heavy-duty carabiners", "Roof and scaffold safety"] },
    { name: "Heat Protective Garments", category: "Safety Products (PPE)", img: "/suit.png", desc: "Industrial heat resistant suits.", icon: <ShieldAlert size={80} />, features: ["Aluminized proximity suits", "High thermal insulation", "Fire proximity applications", "Radiant heat protection", "Full-body coverage"] },
    { name: "Traffic Cones", category: "Road Safety Products", img: "/cone.jpg", desc: "High-visibility markers.", icon: <TriangleAlert size={80} />, features: ["High-visibility reflective bands", "UV-resistant durable body", "Lightweight and weatherproof", "Flexible and impact resistant", "Stackable design"] },
    { name: "Reflective Signs", category: "Road Safety Products", img: "/sign.jpg", desc: "Glow-in-dark safety signage.", icon: <TriangleAlert size={80} />, features: ["High-intensity retroreflective sheet", "Durable aluminum backing", "Long-lasting performance", "Easy installation", "Multiple hazard symbols"] },
    { name: "Barricades", category: "Road Safety Products", img: "/barricade.jpg", desc: "Crowd and hazard control.", icon: <TriangleAlert size={80} />, features: ["Interlocking mechanisms", "High-impact plastic construction", "Water/sand fillable", "Reflective safety tapes", "Easily movable"] },
    { name: "Safety Markings", category: "Road Safety Products", img: "/tape.jpg", desc: "Road and floor safety tapes.", icon: <TriangleAlert size={80} />, features: ["Anti-slip surface", "Strong adhesive backing", "High-contrast hazard colors", "Industrial grade durability", "Weather resistant"] }
  ];

  const filteredProducts = activeCategory === 'All' ? productsData : productsData.filter(p => p.category === activeCategory);

  const handleEnquire = (productName) => {
    const defaultPhone = "919944677149";
    const message = `Hello Varatha Vinayagar Safety, I'm interested in the product: ${productName}. Could you share a quote and more details?`;
    window.open(`https://wa.me/${defaultPhone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="products-page pt-120">
      <section className="section-padding">
        <div className="section-header text-center">
          <span className="badge">{t('products_badge')}</span>
          <h1 className="section-title">{t('products_h1')} <span className="accent-text">{t('products_h1_span')}</span></h1>
        </div>

        <div className="container mt-40">
          <div className="filter-scroll-wrapper mb-50">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`btn-outline btn-alive ${activeCategory === cat ? 'active-filter' : ''}`}
              >
                {getCatLabel(cat)}
              </button>
            ))}
          </div>

          <motion.div layout className="products-grid">
            <AnimatePresence>
              {filteredProducts.map((product, i) => (
                <motion.div
                  key={product.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Tilt
                    className="product-card-detailed glass-card product-card-floating"
                    options={{ max: 15, scale: 1.05, speed: 1000 }}
                    style={{ animationDelay: `${i * 0.5}s` }}
                  >
                    <div className="product-visual-large relative">
                      <span className="badge" style={{position: 'absolute', top: '20px', left: '20px', zIndex: 10}}>{product.category}</span>
                      {product.img ? (
                        <img src={product.img} alt={product.name} className="product-img-full" style={{ filter: 'drop-shadow(0 0 20px rgba(255, 0, 0, 0.3))' }} />
                      ) : (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%', opacity: 0.5, color: 'var(--primary)' }}>
                          {product.icon}
                        </div>
                      )}
                    </div>
                    <div className="product-details-content bg-surface" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <h3 style={{ fontSize: '1.4rem' }}>{product.name}</h3>
                      <p className="text-muted mt-10 mb-20">{product.desc}</p>
                      <ul className="product-specs mt-10 mb-20">
                        {product.features?.map((feature, idx) => (
                          <li key={idx}><CheckCircle size={14} className="accent-text" /> {feature}</li>
                        ))}
                      </ul>
                      <div className="mt-auto pt-20" style={{ borderTop: '1px solid var(--glass-border)' }}>
                        <button
                          className="btn-primary btn-alive w-full"
                          onClick={() => handleEnquire(product.name)}
                          style={{ justifyContent: 'center' }}
                        >
                          {t('enquire_now')} <ChevronRight size={16} />
                        </button>
                      </div>
                    </div>
                  </Tilt>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
