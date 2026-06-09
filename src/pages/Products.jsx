import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, ChevronRight, Filter, ShieldAlert, Droplet, BellRing, Settings, TriangleAlert, Activity, CheckCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { productsData } from '../data/productsData';

const Products = () => {
  const location = useLocation();
  const { t, lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(location.state?.filter || 'All');

  React.useEffect(() => {
    if (location.state?.filter) setActiveCategory(location.state.filter);
  }, [location.state]);

  const categories = ['All', 'Fire Extinguishers', 'Fire Alarm Systems', 'Hydrant & Fire Fighting', 'Safety Products (PPE)', 'Road Safety Products'];

  const catKeyMap = {
    'All': 'products_all',
    'Fire Extinguishers': 'cat_fire_extinguishers',
    'Fire Alarm Systems': 'cat_fire_alarm',
    'Hydrant & Fire Fighting': 'cat_hydrant',
    'Safety Products (PPE)': 'cat_ppe',
    'Road Safety Products': 'cat_road_safety',
  };

  const getCatLabel = (cat) => t(catKeyMap[cat]) || cat;

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
                className={`btn-outline ${activeCategory === cat ? 'active-filter' : ''}`}
                style={activeCategory === cat ? { background: 'var(--primary)', color: 'white', borderColor: 'var(--primary)' } : {}}
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
                  <div 
                    className="product-card-detailed glass-card"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="product-visual-large relative">
                      <span className="product-category-badge" style={{position: 'absolute', top: '20px', left: '20px', zIndex: 10}}>{product.category}</span>
                      {product.img ? (
                        <img src={product.img} alt={product.name} className="product-img-full" />
                      ) : (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%', opacity: 0.5, color: 'var(--primary)' }}>
                          {product.icon}
                        </div>
                      )}
                    </div>
                    <div className="product-details-content" style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#ffffff', borderTop: '1px solid #e2e4e9' }}>
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
                  </div>
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
