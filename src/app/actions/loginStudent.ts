'use server';

import { supabase } from '@/lib/supabaseClient';
import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';

export default async function loginStudent({
  email,
  password,
}: { email: string; password: string }) {
  // Recupera lo studente per email
  const { data, error } = await supabase
    .from('users')
    .select('id, email, password_hash')
    .eq('email', email)
    .single();

  if (error || !data) {
    throw new Error('Studente non trovato');
  }

  // Verifica la password con bcrypt
  const passwordMatch = await bcrypt.compare(password, data.password_hash);
  if (!passwordMatch) {
    throw new Error('Password errata');
  }

  // Salva sessione in cookie
  const cookieStore = cookies();
  (cookieStore as any).set(
    'uc_session',
    JSON.stringify({
      type: 'student',
      id: data.id,
      email: data.email,
    }),
    {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 giorni
    }
  );

  return { id: data.id, email: data.email };
}
