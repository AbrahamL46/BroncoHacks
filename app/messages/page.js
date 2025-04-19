'use client';
import { UserContext } from '../components/UserContext';
import { LanguageContext } from '../components/LanguageContext';
import { useContext, useEffect, useState } from 'react';

export default function page() {
  const { language } = useContext(LanguageContext);
  const { user } = useContext(UserContext);

  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);

  //   const { error } = await supabase
  //   .from('countries')
  //   .insert({ id: 1, name: 'Mordor' })

  // select all conversations that belong to user
  // display all conversations
  // check for conversation id in params
  // select all messages with conversation id
  useEffect(() => {}, []);
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
