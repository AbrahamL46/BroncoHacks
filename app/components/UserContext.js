'use client';
import { createContext, useState, useEffect } from 'react';

const UserContext = createContext(null);

export default function UserProvider({ children }) {
  const [user, setUser] = useState('English');

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
    <UserContext.Provider value={{ language, updateLanguage }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext };
