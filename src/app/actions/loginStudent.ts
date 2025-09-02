'use server';

import { supabase } from '@/lib/supabaseClient';
import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';

export default async function loginStudent({
  email,
  password,
}: { email: string; password: string }) {
  // Recupero utente
  const { data, error } = await supabase
    .from('users')
    .select('id, email, password_hash')
    .eq('email', email)
    .single();

  if (error || !data) {
    throw new Error('Credenziali non valide per studente');
  }

  // Verifica password
  const passwordMatch = await bcrypt.compare(password, data.password_hash);
  if (!passwordMatch) {
    throw new Error('Password errata');
  }

  // ✅ cookies() NON è async → niente await
  const cookieStore = await cookies();

  cookieStore.set('uc_session', JSON.stringify({
    type: 'student',
    id: data.id,
    email: data.email,
  }), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 giorni
  });

  return data;
}
