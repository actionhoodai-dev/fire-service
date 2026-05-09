import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageToggle = ({ compact = false }) => {
  const { lang, toggleLang } = useLanguage();
  const isEn = lang === 'en';

  return (
    <button
      className={`lang-toggle-btn ${compact ? 'lang-toggle-compact' : ''}`}
      onClick={toggleLang}
      aria-label={isEn ? 'Switch to Tamil' : 'Switch to English'}
      title={isEn ? 'தமிழில் காண' : 'View in English'}
    >
      <span className="lang-toggle-track">
        <span className={`lang-toggle-thumb ${isEn ? 'thumb-left' : 'thumb-right'}`} />
        <span className={`lang-label lang-label-left ${isEn ? 'lang-label-active' : ''}`}>EN</span>
        <span className={`lang-label lang-label-right ${!isEn ? 'lang-label-active' : ''}`}>தமிழ்</span>
      </span>
    </button>
  );
};

export default LanguageToggle;
