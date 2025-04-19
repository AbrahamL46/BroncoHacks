'use client';
import React from 'react';
import styles from '../styles/Header.module.css';

import us from '@/public/assets/us.png';
import mx from '@/public/assets/mx.png';
import Image from 'next/image';

import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

export default function Header() {
  const { updateLanguage } = useContext(LanguageContext);

  return (
    <header className={styles.header}>
      {/* header content goes here */}
      <div>
        <h1>Contigo</h1>
        <p>
          Empowering <b>usted</b>
        </p>
      </div>
      <div>
        <p>Language/Idioma</p>
        <button onClick={() => updateLanguage('English')}>
          <Image src={us} width={32} height={32} alt='English' />
        </button>

        {/* add spanish button */}
      </div>
    </header>
  );
}
