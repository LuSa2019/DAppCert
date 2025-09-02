'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import InsertCertificate from './components/InsertCertificate';
import CertificateList from './components/CertificateList';
import { useRouter } from 'next/navigation';

export default function EntityDashboard() {
  const [activeTab, setActiveTab] = useState<'insert' | 'list'>('insert');
  const [entityId, setEntityId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchEntity = async () => {
      try {
        setLoading(true);

        // Recupera email salvata al login
        const email = localStorage.getItem('userEmail');
        if (!email) throw new Error('Nessuna email trovata in sessione');

        // Recupera entity_id dalla tabella entities
        const { data, error: entityErr } = await supabase
          .from('entities')
          .select('id')
          .eq('email', email)
          .single();

        if (entityErr) throw entityErr;
        if (!data) throw new Error('Ente non trovato');

        setEntityId(data.id);
      } catch (_) {
        setError('Errore nel recupero dell’ente');
      } finally {
        setLoading(false);
      }
    };

    fetchEntity();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem('userEmail'); // 🔑 pulizia
    router.push('/'); // 🔑 redirect alla home
  };

  if (loading) {
    return <div className="p-4 text-gray-100">⏳ Caricamento...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-200">❌ {error}</div>;
  }

  if (!entityId) {
    return <div className="p-4 text-red-200">❌ Nessun ente associato a questo account</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 to-indigo-900 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-indigo-700">Dashboard Ente</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            🚪 Logout
          </button>
        </div>

        <div className="flex gap-4 mb-6 border-b pb-2">
          <button
            onClick={() => setActiveTab('insert')}
            className={`px-4 py-2 rounded-t-lg ${
              activeTab === 'insert' ? 'bg-indigo-700 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            ➕ Inserisci Certificato
          </button>
          <button
            onClick={() => setActiveTab('list')}
            className={`px-4 py-2 rounded-t-lg ${
              activeTab === 'list' ? 'bg-indigo-700 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            📜 Lista Certificati
          </button>
        </div>

        {activeTab === 'insert' ? (
          <InsertCertificate entityId={entityId} />
        ) : (
          <CertificateList entityId={entityId} />
        )}
      </div>
    </div>
  );
}
