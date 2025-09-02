'use server';

import { supabase } from '@/lib/supabaseClient';

export async function getCertificatesByStudent() {
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    throw new Error('Utente non autenticato');
  }

  const { data, error } = await supabase
    .from('certificates')
    .select('id, title, description, issued_date, blockchain_tx, hash')
    .eq('student_id', user.id)
    .order('issued_date', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
