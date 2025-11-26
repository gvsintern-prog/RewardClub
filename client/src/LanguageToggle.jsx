import React from 'react';
import { useTranslation } from 'react-i18next';
import "./l.css"
const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const toggleLanguage = (lang) => {
    console.log(`Changing language to: ${lang}`);
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => toggleLanguage('en')}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 ${
          currentLanguage === 'en'
            ? 'bg-white text-Green font-semibold shadow-md'
            : 'text-white hover:bg-white/20'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => toggleLanguage('ar')}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 ${
          currentLanguage === 'ar'
            ? 'bg-white text-Green font-semibold shadow-md'
            : 'text-white hover:bg-white/20'
        }`}
      >
        عربي
      </button>
    </div>
  );
};

export default LanguageToggle;
