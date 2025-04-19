'use client';
import Image from 'next/image';
import styles from './page.module.css';

import { useContext } from 'react';
import { LanguageContext } from './components/LanguageContext';

export default function Home() {
  const { language, updateLanguage } = useContext(LanguageContext);

  return (
    <div>
      <main>
        
      </main>
    </div>
  );
}
