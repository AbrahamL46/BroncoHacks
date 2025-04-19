'use client';
import { createContext, useState, useEffect } from 'react';

const LanguageContext = createContext(null);

export default function LangaugeProvider({ children }) {
  const [language, setLanguage] = useState('English');

  function updateLanguage(newLanguage) {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  }

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);
  return (
    <LanguageContext.Provider value={{ language, updateLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageContext };
