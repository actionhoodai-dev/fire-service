import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ChevronRight, Filter } from 'lucide-react';
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
    { name: "Powder Type (ABC)", category: "Fire Extinguishers", img: "/apparatus.png", desc: "Multi-purpose dry chemical." },
    { name: "CO₂ Type", category: "Fire Extinguishers", img: "/apparatus.png", desc: "Safe for electrical fires." },
    { name: "Foam & Water Type", category: "Fire Extinguishers", img: null, desc: "For solid and liquid fires." },
    { name: "Clean Agent (FE-36)", category: "Fire Extinguishers", img: null, desc: "Leaves no residue." },
    { name: "Kitchen Fire Extinguishers", category: "Fire Extinguishers", img: null, desc: "Specialized for oils/fats." },
    { name: "D-Class Metal Fire Extinguishers", category: "Fire Extinguishers", img: null, desc: "For combustible metals." },
    // Fire Alarm Systems
    { name: "Digital Addressable Fire Alarm Panels", category: "Fire Alarm Systems", img: null, desc: "Precision fire locating panels." },
    { name: "Smoke Detectors", category: "Fire Alarm Systems", img: null, desc: "Early warning smoke sensing." },
    { name: "Heat Detectors", category: "Fire Alarm Systems", img: null, desc: "Triggered by temperature spikes." },
    { name: "Manual Call Points", category: "Fire Alarm Systems", img: null, desc: "Manual emergency triggers." },
    { name: "Gas Release Systems", category: "Fire Alarm Systems", img: null, desc: "Automated suppression release." },
    // Hydrant & Fire Fighting
    { name: "Landing Valves", category: "Hydrant & Fire Fighting", img: null, desc: "High pressure control valves." },
    { name: "Fire Hydrants (2-way / 4-way)", category: "Hydrant & Fire Fighting", img: null, desc: "High capacity water delivery." },
    { name: "Hose Reel Systems", category: "Hydrant & Fire Fighting", img: null, desc: "Rapid deployment water hoses." },
    { name: "Foam Monitor Systems", category: "Hydrant & Fire Fighting", img: null, desc: "Heavy-duty foam deployment." },
    { name: "Water Monitors", category: "Hydrant & Fire Fighting", img: null, desc: "High trajectory water streams." },
    // Safety Products (PPE)
    { name: "Head Protection", category: "Safety Products (PPE)", img: null, desc: "Industrial safety helmets." },
    { name: "Eye & Face Protection", category: "Safety Products (PPE)", img: null, desc: "Goggles and face shields." },
    { name: "Respiratory Protection", category: "Safety Products (PPE)", img: null, desc: "Masks and breathing apparatus." },
    { name: "Hand Gloves", category: "Safety Products (PPE)", img: "/gloves.png", desc: "Heat and chemical resistant." },
    { name: "Safety Shoes", category: "Safety Products (PPE)", img: "/shoes.png", desc: "Reinforced industrial footwear." },
    { name: "Fall Protection Equipment", category: "Safety Products (PPE)", img: null, desc: "Harnesses and safety lines." },
    // Road Safety Products
    { name: "Traffic Cones", category: "Road Safety Products", img: null, desc: "High-visibility markers." },
    { name: "Reflective Signs", category: "Road Safety Products", img: null, desc: "Glow-in-dark safety signage." },
    { name: "Barricades", category: "Road Safety Products", img: null, desc: "Crowd and hazard control." },
    { name: "Safety Markings", category: "Road Safety Products", img: null, desc: "Road and floor safety tapes." }
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
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%', opacity: 0.5 }}>
                          <ShoppingBag size={80} style={{ color: 'var(--primary-glow)' }} />
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
