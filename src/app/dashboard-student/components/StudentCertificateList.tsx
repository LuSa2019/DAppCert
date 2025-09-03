'use client';

import { useEffect, useState, useMemo } from 'react';
import { getCertificatesByStudent } from '@/app/actions/certificateActions';
import { Clipboard } from 'lucide-react';

type Certificate = {
  id: string;
  title: string;
  description: string;
  issued_date: string;
  blockchain_tx: string;
  entity_name: string;
};

type Props = {
  studentId: string;
};

export default function StudentCertificateList({ studentId }: Props) {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const pageSize = 10;

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const data = await getCertificatesByStudent(studentId);
        setCertificates(data);
      } catch {
        setError('Errore durante il recupero dei certificati');
      } finally {
        setLoading(false);
      }
    };

    if (studentId) fetchCertificates();
  }, [studentId]);

  // 🔍 Filtraggio in tempo reale
  const filteredCertificates = useMemo(() => {
    return certificates.filter(
      (cert) =>
        cert.title.toLowerCase().includes(search.toLowerCase()) ||
        cert.description?.toLowerCase().includes(search.toLowerCase())
    );
  }, [certificates, search]);

  // 📄 Paginazione
  const totalPages = Math.ceil(filteredCertificates.length / pageSize);
  const paginatedCertificates = filteredCertificates.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  const handleCopy = (tx: string) => {
    navigator.clipboard.writeText(`https://sepolia.etherscan.io/tx/${tx}`);
    alert('🔗 Link copiato negli appunti!');
  };

  if (loading) return <p className="text-gray-600">Caricamento certificati...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <section className="mt-8">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl">📜</span>
        <h2 className="text-2xl font-bold text-indigo-800">
          Di seguito la lista dei tuoi certificati
        </h2>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        Copia il link per condividere il codice del documento. Chi lo riceverà potrà verificarne
        l’autenticità.
      </p>

      {/* 🔍 Search box */}
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1); // reset alla prima pagina durante la ricerca
        }}
        placeholder="🔍 Cerca per titolo o descrizione..."
        className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {paginatedCertificates.length === 0 ? (
        <p className="text-gray-500">Nessun certificato trovato.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {paginatedCertificates.map((cert) => (
            <div key={cert.id} className="bg-white p-4 rounded-xl shadow-md border">
              <h3 className="text-lg font-bold text-indigo-800">{cert.title}</h3>
              <p className="text-sm text-gray-600">{cert.description}</p>
              <p className="text-sm mt-2">
                <strong>Emesso da:</strong> {cert.entity_name}
              </p>
              <p className="text-sm">
                <strong>Data:</strong> {new Date(cert.issued_date).toLocaleDateString()}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <a
                  href={`https://sepolia.etherscan.io/tx/${cert.blockchain_tx}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 underline"
                >
                  Visualizza transazione
                </a>
                <button
                  onClick={() => handleCopy(cert.blockchain_tx)}
                  className="p-1 rounded hover:bg-gray-200"
                  title="Copia link"
                >
                  <Clipboard size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 📄 Paginazione */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            ◀ Precedente
          </button>
          <span>
            Pagina {page} di {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Successiva ▶
          </button>
        </div>
      )}
    </section>
  );
}
