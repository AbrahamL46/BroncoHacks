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
        <>
          <MdFavorite className={styles.response_icon} /> Migrant
        </>,
        <>
          <MdCardTravel className={styles.response_icon} /> Lawyer
        </>,
      ],
    },
  ];
  return (
    <main>
      <div className={styles.sidebar}>
        <p>{language == 'English' ? "Let's get to " : 'Vamos a '}</p>
        <div>
          <p className={`${styles.contigo} ${styles.know_each_other}`}>
            <em>{language == 'English' ? ' know ' : ' conocernos'}</em>
          </p>
          <p className={styles.know_each_other}>
            {language == 'English' ? ' each other' : ''}
          </p>
        </div>
      </div>
      <div className={styles.questions}>
        {/* render questions */}
        <div>
          {/* if view === 1, render question 1 questions */}
          {view === 1 &&
            <div>
              <h2>{questions[view-1].question}</h2>
              <p>{questions[view-1].subtitle}</p>
              <div>
                {questions[view-1].responses.map((q, index) => (
                  <div key={index}><button className={styles.response_button}>{q}</button></div>
                ))}
              </div>
              {/* <button>{questions[view].responses}</button> */}
            </div>
          }
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
