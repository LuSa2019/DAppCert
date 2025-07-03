import { supabase } from '@/lib/supabaseClient';
import bcrypt from 'bcryptjs';

interface EntityData {
  nome: string;
  email: string;
  password: string; // hash della password!
}

export default async function registerEntity(data: EntityData) {
  // Calcola l'hash
  const passwordHash = await bcrypt.hash(data.password, 10);
  const { error } = await supabase
    .from('entities')
    .insert({
      nome_ente: data.nome,
      email: data.email,
      password_hash: passwordHash,
    });

  if (error) throw error;

  return { success: true };
}
