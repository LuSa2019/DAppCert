'use server';

import { supabase } from '@/lib/supabaseClient';

// Recupera tutti i certificati emessi da un dato ente
export async function getCertificatesByEntity(entityId: string) {
  if (!entityId) throw new Error('ID ente mancante');

  const { data, error } = await supabase
    .from('certificates')
    .select(`
      id,
      title,
      description,
      issued_date,
      blockchain_tx,
      users:student_id (
        email,
        nome,
        cognome
      )
    `)
    .eq('entity_id', entityId)
    .order('issued_date', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  const certificates = data.map((cert) => {
    const student = Array.isArray(cert.users) ? cert.users[0] : cert.users;

    return {
      id: cert.id,
      title: cert.title,
      description: cert.description,
      issued_date: cert.issued_date,
      blockchain_tx: cert.blockchain_tx,
      student_email: student?.email ?? 'N/A',
      student_name: student ? `${student.nome} ${student.cognome}` : 'N/A',
    };
  });

  return certificates;
}

// Elimina un certificato solo se appartiene all'ente corretto
export async function deleteCertificate(id: string, entityId: string) {
  if (!id || !entityId) throw new Error('ID certificato o ente mancante');

  const { error } = await supabase
    .from('certificates')
    .delete()
    .eq('id', id)
    .eq('entity_id', entityId); // sicurezza: l'ente può cancellare solo i propri certificati

  if (error) {
    throw new Error(error.message);
  }
}
