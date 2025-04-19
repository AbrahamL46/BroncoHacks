import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function signUp({ email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  return { data, error };
}

export async function getConversations(user) {
  const userId = user.user.id;

  const { data, error } = await supabase
    .from('conversations')
    .select('*')
    .filter('users', 'cs', `["${userId}"]`);

  return { data, error };
}

export async function getConversationHistory(id) {
  const { data, error } = await supabase
    .from('messages')
    .select('*')
    .eq('conversation_id', id);

  return { data, error };
}
