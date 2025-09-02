'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getCertificatesByStudent } from './components/certificateActions';
import { FileText, Link as LinkIcon } from 'lucide-react';

type Certificate = {
  id: string;
  title: string;
  description: string;
  issued_date: string;
  blockchain_tx: string;
  hash: string;
};

export default function CertificateListStudent() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const data = await getCertificatesByStudent();
        setCertificates(data);
      } catch {
        setError('Errore durante il caricamento dei certificati.');
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  if (loading) {
    return <p className="text-gray-700">Caricamento certificati in corso...</p>;
  }

  if (error) {
    return <p className="text-red-600">{error}</p>;
  }

  return (
    <section className="mt-10 px-6">
      <h2 className="text-2xl font-bold text-indigo-800 mb-6">I tuoi certificati</h2>

      {certificates.length === 0 ? (
        <div className="bg-yellow-100 text-yellow-800 px-4 py-3 rounded-md shadow">
          Nessun certificato presente.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map(cert => (
            <div
              key={cert.id}
              className="bg-white rounded-xl p-5 shadow-md border border-gray-200"
            >
              <div className="flex items-center gap-2 mb-2 text-indigo-700">
                <FileText />
                <h3 className="text-lg font-semibold">{cert.title}</h3>
              </div>

              <p className="text-gray-700 mb-2">{cert.description}</p>
              <p className="text-sm text-gray-500 mb-3">
                Emesso il: {new Date(cert.issued_date).toLocaleDateString()}
              </p>

              <div className="flex items-center gap-2">
                <LinkIcon className="text-green-600" size={18} />
                <Link
                  href={`/verify?hash=${cert.hash}`}
                  target="_blank"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Verifica certificato
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
