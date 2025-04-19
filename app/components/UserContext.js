'use client';
import { createContext, useState, useEffect } from 'react';

const UserContext = createContext(null);

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  function updateUser(user) {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
  }

  useEffect(() => {
    const storeduser = localStorage.getItem('user');
    if (storeduser) {
      setUser(JSON.parse(storeduser));
    }
  }, []);
  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext };
