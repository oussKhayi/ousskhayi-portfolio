import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 bg-secondary/80 hover:bg-secondary text-primary font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-300"
      aria-label="Toggle language"
    >
      {language === 'en' ? 'FR' : 'EN'}
    </button>
  );
};
