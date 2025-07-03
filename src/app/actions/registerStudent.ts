import { supabase } from '@/lib/supabaseClient';
import bcrypt from 'bcryptjs';

interface StudentData {
  nome: string;
  cognome: string;
  dataNascita: string;
  email: string;
  password: string;
}

export default async function registerStudent(data: StudentData) {
  // Calcola l'hash
  const passwordHash = await bcrypt.hash(data.password, 10);
  const { error } = await supabase
    .from('users')
    .insert({
      nome: data.nome,
      cognome: data.cognome,
      data_nascita: data.dataNascita,
      email: data.email,
      password_hash: passwordHash,
    });

  if (error) throw error;

  return { success: true };
}
