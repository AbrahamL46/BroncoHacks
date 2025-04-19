'use client';
import styles from '../styles/Messages.module.css';
import { UserContext } from '../components/UserContext';
import { LanguageContext } from '../components/LanguageContext';
import { useContext, useEffect, useState, Suspense } from 'react';
import { getConversationHistory, getConversations } from '../lib/supabase';
import { useSearchParams, useRouter } from 'next/navigation';

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
    }
  }, [searchParams]);
  return (
    <main>
      <div>
        <h1>Messages</h1>
        <div>
          {/* render all of the conversations, onclick add the convo id to search params + update state */}
          {conversations != null &&
            conversations.data.map((convo, index) => (
              <button
                key={index}
                onClick={() => setActiveConversation(convo.id)}
              >
                {convo.id}
              </button>
            ))}
        </div>
      </div>
      <div>
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
            </div>
          ))}
      </div>
    </main>
  );
}
