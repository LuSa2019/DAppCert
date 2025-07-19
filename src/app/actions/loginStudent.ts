'use server';

import { supabase } from '@/lib/supabaseClient';

export default async function loginStudent({ email, password }:{email: string, password: string}) {
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw new Error(error.message);
}
