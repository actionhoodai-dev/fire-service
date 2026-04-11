import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ChevronRight, Filter, ShieldAlert, Droplet, BellRing, Settings, TriangleAlert, Activity } from 'lucide-react';
import { Tilt } from 'react-tilt';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Fire Extinguishers',
    'Fire Alarm Systems',
    'Hydrant & Fire Fighting',
    'Safety Products (PPE)',
    'Road Safety Products'
  ];

  const productsData = [
    // Fire Extinguishers
    { name: "Powder Type (ABC)", category: "Fire Extinguishers", img: "/extinguisher.png", desc: "Multi-purpose dry chemical.", icon: <Droplet size={80} /> },
    { name: "CO₂ Type", category: "Fire Extinguishers", img: "/co2.png", desc: "Safe for electrical fires.", icon: <Droplet size={80} /> },
    { name: "Foam & Water Type", category: "Fire Extinguishers", img: "/foam.png", desc: "For solid and liquid fires.", icon: <Droplet size={80} /> },
    { name: "Clean Agent (FE-36)", category: "Fire Extinguishers", img: "/clean_agent.png", desc: "Leaves no residue.", icon: <Droplet size={80} /> },
    { name: "Kitchen Fire Extinguishers", category: "Fire Extinguishers", img: "/kitchen.png", desc: "Specialized for oils/fats.", icon: <Droplet size={80} /> },
    { name: "D-Class Metal Fire Extinguishers", category: "Fire Extinguishers", img: "/d_class.jpg", desc: "For combustible metals.", icon: <Droplet size={80} /> },
    // Fire Alarm Systems
    { name: "Digital Addressable Fire Alarm Panels", category: "Fire Alarm Systems", img: "/panel.jpg", desc: "Precision fire locating panels.", icon: <Activity size={80} /> },
    { name: "Smoke Detectors", category: "Fire Alarm Systems", img: "/detector.png", desc: "Early warning smoke sensing.", icon: <BellRing size={80} /> },
    { name: "Heat Detectors", category: "Fire Alarm Systems", img: "/detector.png", desc: "Triggered by temperature spikes.", icon: <BellRing size={80} /> },
    { name: "Manual Call Points", category: "Fire Alarm Systems", img: "/call_point.jpg", desc: "Manual emergency triggers.", icon: <BellRing size={80} /> },
    { name: "Gas Release Systems", category: "Fire Alarm Systems", img: "/gas_release.jpg", desc: "Automated suppression release.", icon: <Settings size={80} /> },
    // Hydrant & Fire Fighting
    { name: "Landing Valves", category: "Hydrant & Fire Fighting", img: "/hydrant.png", desc: "High pressure control valves.", icon: <Settings size={80} /> },
    { name: "Fire Hydrants (2-way / 4-way)", category: "Hydrant & Fire Fighting", img: "/hydrant.png", desc: "High capacity water delivery.", icon: <Settings size={80} /> },
    { name: "Hose Reel Systems", category: "Hydrant & Fire Fighting", img: "/hose_reel.jpg", desc: "Rapid deployment water hoses.", icon: <Settings size={80} /> },
    { name: "Foam Monitor Systems", category: "Hydrant & Fire Fighting", img: "/foam_monitor.jpg", desc: "Heavy-duty foam deployment.", icon: <Settings size={80} /> },
    { name: "Water Monitors", category: "Hydrant & Fire Fighting", img: "/water_monitor.jpg", desc: "High trajectory water streams.", icon: <Settings size={80} /> },
    // Safety Products (PPE)
    { name: "Head Protection", category: "Safety Products (PPE)", img: "/helmet.png", desc: "Industrial safety helmets.", icon: <ShieldAlert size={80} /> },
    { name: "Eye & Face Protection", category: "Safety Products (PPE)", img: "/suit.png", desc: "Goggles and face shields.", icon: <ShieldAlert size={80} /> },
    { name: "Respiratory Protection", category: "Safety Products (PPE)", img: "/apparatus.png", desc: "Masks and breathing apparatus.", icon: <ShieldAlert size={80} /> },
    { name: "Hand Gloves", category: "Safety Products (PPE)", img: "/gloves.png", desc: "Heat and chemical resistant.", icon: <ShieldAlert size={80} /> },
    { name: "Safety Shoes", category: "Safety Products (PPE)", img: "/shoes.png", desc: "Reinforced industrial footwear.", icon: <ShieldAlert size={80} /> },
    { name: "Fall Protection Equipment", category: "Safety Products (PPE)", img: "/suit.png", desc: "Harnesses and safety lines.", icon: <ShieldAlert size={80} /> },
    { name: "Heat Protective Garments", category: "Safety Products (PPE)", img: "/suit.png", desc: "Industrial heat resistant suits.", icon: <ShieldAlert size={80} /> },
    // Road Safety Products
    { name: "Traffic Cones", category: "Road Safety Products", img: "/cone.jpg", desc: "High-visibility markers.", icon: <TriangleAlert size={80} /> },
    { name: "Reflective Signs", category: "Road Safety Products", img: "/sign.jpg", desc: "Glow-in-dark safety signage.", icon: <TriangleAlert size={80} /> },
    { name: "Barricades", category: "Road Safety Products", img: "/barricade.jpg", desc: "Crowd and hazard control.", icon: <TriangleAlert size={80} /> },
    { name: "Safety Markings", category: "Road Safety Products", img: "/tape.jpg", desc: "Road and floor safety tapes.", icon: <TriangleAlert size={80} /> }
  ];

  const filteredProducts = activeCategory === 'All' 
    ? productsData 
    : productsData.filter(p => p.category === activeCategory);

  const handleEnquire = (productName) => {
    const defaultPhone = "919944677149";
    const message = `Hello Varatha Vinayagar Safety, I'm interested in the product: ${productName}. Could you share a quote and more details?`;
    window.open(`https://wa.me/${defaultPhone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="products-page pt-120">
      <section className="section-padding">
        <div className="section-header text-center">
          <span className="badge">Our Catalog</span>
          <h1 className="section-title">Premium Safety <span className="accent-text">Products</span></h1>
        </div>

        <div className="container mt-40">
          <div className="filter-scroll-wrapper mb-50" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`btn-outline ${activeCategory === cat ? 'bg-primary border-primary text-white' : ''}`}
                style={activeCategory === cat ? { background: 'var(--primary)', color: 'white' } : {}}
              >
                {cat}
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
                  <Tilt className="product-card-detailed glass-card" options={{ max: 5, scale: 1.01 }}>
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
                      
                      <div className="mt-auto pt-20" style={{ borderTop: '1px solid var(--glass-border)' }}>
                        <button 
                          className="btn-primary w-full"
                          onClick={() => handleEnquire(product.name)}
                          style={{ justifyContent: 'center' }}
                        >
                          Enquire Now <ChevronRight size={16} />
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
