'use client';

import { useState } from 'react';
import { aggiungiCertificatoSuChain } from '@/lib/contract';
import { supabase } from '@/lib/supabaseClient';

interface InsertCertificateProps {
  entityId: string; // da passare dal contesto/sessione
}

export default function InsertCertificate({ entityId }: InsertCertificateProps) {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    studentEmail: '',
    corso: '',
    descrizione: '',
    data: '',
  });
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePdfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setPdfFile(e.target.files[0]);
  };

  const calculateHash = async (file: File): Promise<string> => {
    const arrayBuffer = await file.arrayBuffer();
    const hashBuffer = await crypto.subtle.digest('SHA-256', arrayBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    if (!pdfFile) return setStatus('Seleziona un PDF');
    if (!formData.studentEmail) return setStatus('Inserisci l\'email dello studente');

    setLoading(true);

    try {
      // 1. Trova utente per email
      const { data: users, error: userErr } = await supabase
        .from('users')
        .select('id')
        .eq('email', formData.studentEmail)
        .limit(1)
        .single();

      if (userErr || !users) {
        setStatus('❌ Studente non trovato con questa email');
        setLoading(false);
        return;
      }

      const studentId = users.id;

      // 2. Calcola hash PDF
      const hash = await calculateHash(pdfFile);

      // 3. Interagisci con smart contract e ottieni txHash
      const txHash = await aggiungiCertificatoSuChain(hash);
      setStatus(`✅ Transazione inviata: ${txHash}`);

/*      
      // 4. Upload file
      const fileName = `cert-${Date.now()}.pdf`;
      const { error: uploadErr } = await supabase.storage
        .from('certificati')
        .upload(fileName, pdfFile);
      
      if (uploadErr) throw uploadErr;
    */
      // 5. Inserisci record certificato
      const { error: insertErr } = await supabase
        .from('certificates')
        .insert({
          student_id: studentId,
          entity_id: entityId,
          title: formData.corso,
          description: formData.descrizione,
          issued_date: formData.data,
          blockchain_tx: txHash,
          //file_path: fileName,
        });

      if (insertErr) throw insertErr;

      setStatus('✅ Certificato registrato con successo!');
      setFormData({ studentEmail: '', corso: '', descrizione: '', data: '' });
      setPdfFile(null);
    } catch (err) {
      if (err instanceof Error) {
        setStatus(`❌ Errore: ${err.message}`);
      } else {
        setStatus('❌ Errore sconosciuto');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-indigo-700">Inserisci nuovo certificato</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          name="studentEmail"
          value={formData.studentEmail}
          onChange={handleChange}
          placeholder="Email studente"
          className="border rounded p-2"
          required
        />

        <input
          type="text"
          name="corso"
          value={formData.corso}
          onChange={handleChange}
          placeholder="Nome Corso"
          className="border rounded p-2"
          required
        />

        <textarea
          name="descrizione"
          value={formData.descrizione}
          onChange={handleChange}
          placeholder="Descrizione certificato"
          className="border rounded p-2"
          required
        />

        <input
          type="date"
          name="data"
          value={formData.data}
          onChange={handleChange}
          className="border rounded p-2"
          required
        />

        <input
          type="file"
          accept="application/pdf"
          onChange={handlePdfChange}
          className="border rounded p-2"
          required
        />

        {status && (
          <div className={`text-sm ${status.startsWith('✅') ? 'text-green-600' : 'text-red-600'}`}>
            {status}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="bg-indigo-700 text-white py-2 px-4 rounded hover:bg-indigo-800"
        >
          {loading ? 'Registrazione in corso...' : 'Registra Certificato'}
        </button>
      </form>
    </div>
  );
}
