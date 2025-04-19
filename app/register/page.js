'use client';
import { useState, useContext } from 'react';
import { LanguageContext } from '../components/LanguageContext';
import { MdCardTravel, MdFavorite } from 'react-icons/md';
import styles from '../styles/Register.module.css';

// onboarding page:
// views cycle through views w/ different questions

function page() {
  const [view, setView] = useState(1);
  const [responses, setResponses] = useState({});
  const { language, updateLanguage } = useContext(LanguageContext);
  const questions = [
    {
      question: 'Who are you?',
      subtitle: 'We’ll use this to connect you with the right resources.',
      responses: [
        <p className={styles.radioButton}>
          <MdFavorite /> Migrant
        </p>,
        <p>
          <MdCardTravel /> Lawyer
        </p>,
      ],
    },
  ];
  return (
    <main>
      <p>{language == 'English' ? "Let's get to " : 'Vamos a '}</p>
      <div className="sideBar">
        <p className='contigo know-each-other'>
          <em>{language == 'English' ? ' know ' : ' conocernos'}</em>
        </p>
        <p className='know-each-other'>
          {language == 'English' ? ' each other' : ''}
        </p>
      </div>
      <div className="questions">
        {/* render questions */}
        <div>
          {/* if view === 1, render question 1 questions */}
          {/* if view === x render email + password inputs */}
        </div>
        {/* previous/forward buttons */}
        <div></div>
      </div>
      <footer>{/* "breadcrumb" and step in progress */}</footer>
    </main>
  );
}

export default page;
