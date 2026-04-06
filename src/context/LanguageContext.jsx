import React, { createContext, useContext, useState, useEffect } from 'react';
import enData from '../data.json';
import frData from '../fr-data.json';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [data, setData] = useState(enData);

  useEffect(() => {
    // Load persisted language preference
    const storedLang = localStorage.getItem('portfolio-lang');
    if (storedLang === 'fr') {
      setLanguage('fr');
      setData(frData);
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage((prevLang) => {
      const newLang = prevLang === 'en' ? 'fr' : 'en';
      localStorage.setItem('portfolio-lang', newLang);
      setData(newLang === 'en' ? enData : frData);
      return newLang;
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, data }}>
      {children}
    </LanguageContext.Provider>
  );
};
