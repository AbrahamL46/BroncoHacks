'use client';
import React from 'react';
import styles from '../styles/Header.module.css';

import us from '@/public/assets/us.png';
import mx from '@/public/assets/mx.png';
import Image from 'next/image';
import Link from 'next/link';

import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import { UserContext } from './UserContext';
import { usePathname } from 'next/navigation';

export default function Header() {
  const { updateLanguage } = useContext(LanguageContext);
  const { user, updateUser } = useContext(UserContext);
  console.log(user);

  const pathname = usePathname();
  return (
    <header className={styles.header}>
      {/* header content goes here */}
      <Link href='/'>
        <h1 className='contigo'>
          <em>Contigo</em>
        </h1>
        <p>
          Empowering <b>usted</b>
        </p>
      </Link>
      {pathname != '/register' && user && (
        <nav>
          <Link href='/dashboard'>Dashboard</Link>
          <Link href='/messages'>Messages</Link>
          <Link href='/community'>Community</Link>
        </nav>
      )}
      {pathname === '/register' && (
        <div>
          <p>Language/Idioma</p>
          <button onClick={() => updateLanguage('English')}>
            <Image src={us} width={32} height={32} alt='English' />
          </button>

          <button onClick={() => updateLanguage('Spanish')}>
            <Image src={mx} width={32} height={32} alt='Spanish' />
          </button>
        </div>
      )}
      {pathname != '/register' && user ? (
        <Link href={'/'} onClick={() => updateUser({})}>
          Sign Out
        </Link>
      ) : (
        <Link href={'/register'}>Log In</Link>
      )}
    </header>
  );
}
