import { supabase } from '@/lib/supabaseClient';
import bcrypt from 'bcryptjs';

export default async function loginEntity({
  email,
  password
}: {
  email: string;
  password: string;
}) {
  const trimmedEmail = email.trim();

  const { data, error } = await supabase
    .from('users')
    .select('id, nome, email, password_hash') // <-- usa il nome corretto del campo
    .eq('email', trimmedEmail)
    .single();

  if (error || !data) {
    throw new Error('Email non trovata');
  }

  if (!data.password_hash) {
    console.error('Campo password_hash non trovato nel record:', data);
    throw new Error('Errore interno: password non presente');
  }

  const passwordMatch = await bcrypt.compare(password, data.password_hash);
  if (!passwordMatch) {
    throw new Error('Password errata');
  }

  return {
    id: data.id,
    nome: data.nome,
    email: data.email
  };
}
