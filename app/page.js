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
        <p>{language=="English"?"Let's get to ":"Vamos a "}</p>
        <div>
          <p className="contigo know-each-other"><em>{language=="English"?" know ":" conocernos"}</em></p>
          <p className="know-each-other">{language=="English"?" each other":""}</p>
        </div>
      </main>
    </div>
  );
}
