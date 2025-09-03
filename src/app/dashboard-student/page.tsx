'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import StudentCertificateList from './components/StudentCertificateList';
import { useRouter } from 'next/navigation';

export default function StudentDashboard() {
  const [studentId, setStudentId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        setLoading(true);

        // Recupera email salvata al login
        const email = localStorage.getItem('userEmail');
        if (!email) throw new Error('Nessuna email trovata in sessione');

        // Recupera ID dello studente
        const { data, error: studentErr } = await supabase
          .from('users')
          .select('id')
          .eq('email', email)
          .single();

        if (studentErr) throw studentErr;
        if (!data) throw new Error('Studente non trovato');

        setStudentId(data.id);
      } catch (err: unknown) {
        console.error('Errore fetchStudent:', err);
        setError('Errore nel recupero dello studente');
      } finally {
        setLoading(false);
      }
    };

    fetchStudent();
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

  if (!studentId) {
    return <div className="p-4 text-red-200">❌ Nessuno studente associato a questo account</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 to-indigo-900 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-indigo-700">Dashboard Studente</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            🚪 Logout
          </button>
        </div>

        {/* Lista certificati legata allo studentId */}
        <StudentCertificateList studentId={studentId} />
      </div>
    </div>
  );
}
