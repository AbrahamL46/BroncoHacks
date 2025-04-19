'use client';
import styles from '../styles/Messages.module.css';
import { UserContext } from '../components/UserContext';
import { LanguageContext } from '../components/LanguageContext';
import { useContext, useEffect, useState, Suspense } from 'react';
import { getConversationHistory, getConversations } from '../lib/supabase';
import { useSearchParams, useRouter } from 'next/navigation';
import { MdAttachFile, MdLink } from 'react-icons/md';

export default function page() {
  const { language } = useContext(LanguageContext);
  const { user } = useContext(UserContext);
  const searchParams = useSearchParams();
  const router = useRouter();

  const [conversations, setConversations] = useState(null);
  const [selectedConversation, setSelectedConversation] = useState(null);

  async function sendMessage() {
    const { error } = await supabase
      .from('countries')
      .insert({ id: 1, name: 'Mordor' });
  }

  // display all conversations
  // select all messages with conversation id
  useEffect(() => {
    if (user) {
      getConversations(user).then((res) => setConversations(res));
    }
  }, [user]);
  if (conversations != null) {
    console.log(conversations.data[0].id);
  }

  function setActiveConversation(conversation) {
    getConversationHistory(conversation).then((res) =>
      setSelectedConversation({ id: conversation, history: res })
    );

    router.push(`?id=${conversation}`);
  }

  useEffect(() => {
    const id = searchParams.get('id');
    if (id) {
      setActiveConversation(id);
    } else {
      if (conversations && conversations.data.length > 0) {
        setActiveConversation(conversations.data[0].id);
      }
    }
  }, [searchParams, conversations]);
  return (
    <main className={styles.container}>
      <div>
        <h1>{language == 'English' ? 'Messages' : 'Mensajes'}</h1>
        <div>
          {/* render all of the conversations, onclick add the convo id to search params + update state */}
          {conversations != null &&
            conversations.data.map((convo, index) => (
              <button
                key={index}
                className={styles.conversationChip}
                onClick={() => setActiveConversation(convo.id)}
              >
                <b>Social Worker</b>
                <p>Unread Message</p>
              </button>
            ))}
        </div>
      </div>
      <div className={styles.messageContainer}>
        <div className={styles.messageHistory}>
          {/* render conversation thread */}
          {selectedConversation &&
            selectedConversation.history.data.map((msg, index) => (
              <div
                key={index}
                className={`${styles.message} ${
                  user.user.id === msg.sender && styles.messageAlt
                }`}
              >
                {msg.message}
                {msg.link && (
                  <a href={msg.link}>
                    <MdLink /> Shared Link
                  </a>
                )}
              </div>
            ))}
        </div>
        <div className={styles.messageInput}>
          <MdAttachFile />
          <input placeholder='Type your message...' />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </main>
  );
}
