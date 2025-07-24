'use client';

import { useEffect, useState } from 'react';
import { Trash2 } from 'lucide-react';
import { getCertificatesByEntity, deleteCertificate } from '@/app/actions/certificateActions';

type Certificate = {
  id: string;
  title: string;
  description: string;
  issued_date: string;
  student_name: string;
  student_email: string;
  blockchain_tx: string;
};

type Props = {
  entityId: string;
};

export default function CertificateList({ entityId }: Props) {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const data = await getCertificatesByEntity(entityId);
        setCertificates(data);
      } catch (err) {
        setError('Errore durante il recupero dei certificati');
      } finally {
        setLoading(false);
      }
    };

    if (entityId) fetchCertificates();
  }, [entityId]);

  const handleDelete = async (id: string) => {
    try {
      await deleteCertificate(id, entityId);
      setCertificates((prev) => prev.filter((cert) => cert.id !== id));
    } catch {
      alert('Errore durante l\'eliminazione del certificato');
    }
  };

  if (loading) return <p className="text-white">Caricamento certificati...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold mb-4 text-white">Certificati Emessi</h2>
      {certificates.length === 0 ? (
        <p className="text-gray-300">Nessun certificato emesso.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <div key={cert.id} className="bg-white p-4 rounded-xl shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold text-indigo-800">{cert.title}</h3>
                  <p className="text-sm text-gray-600">{cert.description}</p>
                  <p className="text-sm mt-2">
                    <strong>Studente:</strong> {cert.student_name}
                  </p>
                  <p className="text-sm">
                    <strong>Email:</strong> {cert.student_email}
                  </p>
                  <p className="text-sm">
                    <strong>Data:</strong> {new Date(cert.issued_date).toLocaleDateString()}
                  </p>
                  <a
                    href={`https://sepolia.etherscan.io/tx/${cert.blockchain_tx}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 underline block mt-2"
                  >
                    Visualizza transazione
                  </a>
                </div>
                <button
                  onClick={() => handleDelete(cert.id)}
                  className="text-red-600 hover:text-red-800"
                  title="Elimina certificato"
                >
                  <Trash2 />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
