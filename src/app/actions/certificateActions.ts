'use server';

import { supabase } from '@/lib/supabaseClient';

// ✅ Recupera certificati emessi da un ente
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

  return data.map((cert) => {
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
}

// ✅ Recupera certificati di uno studente
export async function getCertificatesByStudent(studentId: string) {
  if (!studentId) throw new Error('ID studente mancante');

  const { data, error } = await supabase
    .from('certificates')
    .select(`
      id,
      title,
      description,
      issued_date,
      blockchain_tx,
      entities:entity_id (
        nome_ente,
        email
      )
    `)
    .eq('student_id', studentId)
    .order('issued_date', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data.map((cert) => {
    const entity = Array.isArray(cert.entities) ? cert.entities[0] : cert.entities;
    return {
      id: cert.id,
      title: cert.title,
      description: cert.description,
      issued_date: cert.issued_date,
      blockchain_tx: cert.blockchain_tx,
      entity_name: entity?.nome_ente ?? 'N/A',
      entity_email: entity?.email ?? 'N/A',
    };
  });
}

// ✅ Elimina un certificato (solo ente proprietario)
export async function deleteCertificate(id: string, entityId: string) {
  if (!id || !entityId) throw new Error('ID certificato o ente mancante');

  const { error } = await supabase
    .from('certificates')
    .delete()
    .eq('id', id)
    .eq('entity_id', entityId);

  if (error) {
    throw new Error(error.message);
  }
}
