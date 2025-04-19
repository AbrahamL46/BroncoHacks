'use client';
import { UserContext } from '../components/UserContext';
import { LanguageContext } from '../components/LanguageContext';
import { useContext, useEffect, useState } from 'react';
import { getConversations } from '../lib/supabase';
import { useSearchParams } from 'next/navigation';

export default function page() {
  const { language } = useContext(LanguageContext);
  const { user } = useContext(UserContext);
  const searchParams = useSearchParams();

  const [conversations, setConversations] = useState([]);
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

  function setActiveConversation(conversation) {
    setSelectedConversation(conversation.id);
    router.push(`?id=${conversation.id}`);
  }

  useEffect(() => {
    const id = searchParams.get('id');
    if (id) {
      setSelectedConversation(id);
    }
  }, [searchParams]);
  return (
    <main>
      <div>
        <h1>Messages</h1>
        <div>
          {/* render all of the conversations, onclick add the convo id to search params + update state */}
        </div>
      </div>
      <div>{/* render conversation thread */}</div>
    </main>
  );
}
