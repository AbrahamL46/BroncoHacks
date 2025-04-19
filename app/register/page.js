'use client';
import { useState, useContext, useCallback } from 'react';
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
        {
          icon: <MdFavorite className={styles.response_icon} />,
          answer: 'Migrant',
        },
        {
          icon: <MdCardTravel className={styles.response_icon} />,
          answer: 'Lawyer',
        },
      ],
    },
  ];

  const updateResponses = useCallback((response) => {
    setResponses((prev) => ({ ...prev, ...response }));
  }, []);
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
          {view === 1 && (
            <div>
              <h2>{questions[view - 1].question}</h2>
              <p>{questions[view - 1].subtitle}</p>
              <div>
                {questions[view - 1].responses.map((q, index) => (
                  <button
                    className={`${styles.response_button} ${
                      responses[questions[view - 1].question] === q.answer &&
                      styles.response_button_active
                    }`}
                    key={index}
                    onClick={() =>
                      updateResponses({
                        [questions[view - 1].question]: q.answer,
                      })
                    }
                  >
                    {q.icon}
                    {q.answer}
                  </button>
                ))}
              </div>
              <div>
                {/* todo: make these buttons trigger pagination */}
                <button
                  className={`${styles.pagination_button} ${styles.pagination_button_disabled}`}
                >
                  ← Previous
                </button>
                <button
                  className={`${styles.pagination_button} ${
                    responses[questions[view - 1].question] == null &&
                    styles.pagination_button_disabled
                  }`}
                  onClick={() => setView('info')}
                >
                  Next →
                </button>
              </div>
            </div>
          )}
          {/* if view === x render email + password inputs */}
          {view === 'info' && (
            <div>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                id='email'
                onClick={(e) => updateResponses({ email: e.target.value })}
              />
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                name='password'
                id='password'
                onClick={(e) => updateResponses({ password: e.target.value })}
              />
            </div>
          )}
        </div>
        {/* previous/forward buttons */}
        <div></div>
      </div>
      <footer>{/* "breadcrumb" and step in progress */}</footer>
    </main>
  );
}

export default page;
