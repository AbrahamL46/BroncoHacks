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
