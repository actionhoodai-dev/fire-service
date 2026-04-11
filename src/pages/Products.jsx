import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { Tilt } from 'react-tilt';

const Products = () => {
  const products = [
    { 
      title: "Fire Helmets", 
      desc: "Impact-proof with thermal shielding", 
      img: "/helmet.png",
      specs: ["High Heat Resistance", "Anti-Fog Shield"]
    },
    { 
      title: "Breathing Apparatus", 
      desc: "Advanced oxygen supply systems", 
      img: "/apparatus.png",
      specs: ["30min Supply", "Pressure Gauge"]
    },
    { 
      title: "Safety Shoes", 
      desc: "Steel-toe, anti-slip protection", 
      img: "/shoes.png",
      specs: ["Electrical Resistant", "Waterproof"]
    },
    { 
      title: "Safety Gloves", 
      desc: "Heat-resistant industrial grade protection", 
      img: "/gloves.png",
      specs: ["Level 4 Heat Protection", "Industrial Grip"]
    },
    { 
      title: "Fire Safety Suits", 
      desc: "Full Bunker gear for professional use", 
      img: "/suit.png",
      specs: ["Thermal Insulation", "Flame Retardant"]
    }
  ];

  return (
    <div className="products-page pt-120">
      <section className="section-padding">
        <div className="section-header text-center">
          <span className="badge">Safety Gear</span>
          <h1 className="section-title">Safety <span className="accent-text">Equipment</span></h1>
          <p className="max-w-600 mx-auto">Premium grade protective gear designed for the toughest environments. All products are certified for industrial and fire safety.</p>
        </div>

        <div className="products-grid container mt-60">
          {products.map((p, i) => (
            <Tilt key={i} options={{ max: 10, scale: 1.02 }}>
              <motion.div 
                className="glass-card product-card-detailed"
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="product-visual-large">
                  <img src={p.img} alt={p.title} className="product-img-full" />
                </div>
                <div className="product-details-content">
                  <h3>{p.title}</h3>
                  <p className="p-desc">{p.desc}</p>
                  <ul className="product-specs">
                    {p.specs.map((spec, j) => (
                      <li key={j}><Shield size={12} /> {spec}</li>
                    ))}
                  </ul>
                  <a 
                    href={`https://wa.me/916379321829?text=${encodeURIComponent('Hi, I am interested in knowing more about your ' + p.title + ' product.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-sm mt-10"
                    style={{ textAlign: 'center' }}
                  >
                    Enquire Now
                  </a>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
