'use client';
import { createContext, useState } from 'react';

const LanguageContext = createContext(null);

export default function LangaugeProvider({ children }) {
  const [language, setLanguage] = useState('English');

  function updateLanguage(newLanguage) {
    setLanguage(newLanguage);
    // add language to localStorage
  }

  //   add useEffect to capture localStorage language
  return (
    <LanguageContext.Provider value={{ language, updateLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageContext };
