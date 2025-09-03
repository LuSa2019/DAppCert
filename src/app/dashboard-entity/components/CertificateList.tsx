'use client';

import { useEffect, useState, useMemo } from 'react';
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
  const [search, setSearch] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const pageSize = 10;

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const data = await getCertificatesByEntity(entityId);
        setCertificates(data);
      } catch {
        setError('Errore durante il recupero dei certificati');
      } finally {
        setLoading(false);
      }
    };

    if (entityId) fetchCertificates();
  }, [entityId]);

  // 🔍 Filtraggio in tempo reale (titolo, descrizione, nome, email)
  const filteredCertificates = useMemo(() => {
    return certificates.filter((cert) => {
      const query = search.toLowerCase();
      return (
        cert.title.toLowerCase().includes(query) ||
        (cert.description?.toLowerCase() ?? '').includes(query) ||
        cert.student_name.toLowerCase().includes(query) ||
        cert.student_email.toLowerCase().includes(query)
      );
    });
  }, [certificates, search]);

  // 📄 Paginazione
  const totalPages = Math.ceil(filteredCertificates.length / pageSize);
  const paginatedCertificates = filteredCertificates.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  const handleDelete = async (id: string) => {
    try {
      await deleteCertificate(id, entityId);
      setCertificates((prev) => prev.filter((cert) => cert.id !== id));
    } catch {
      alert("Errore durante l'eliminazione del certificato");
    }
  };

  if (loading) return <p className="text-white">Caricamento certificati...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <section className="mt-8">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl">📜</span>
        <h2 className="text-2xl font-bold text-white">Certificati Emessi</h2>
      </div>
      <p className="text-sm text-gray-300 mb-4">
        Puoi ricercare i certificati per titolo, descrizione, nome o email dello studente.
      </p>

      {/* 🔍 Search box */}
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
        placeholder="🔍 Cerca certificati..."
        className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {paginatedCertificates.length === 0 ? (
        <p className="text-gray-300">Nessun certificato trovato.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {paginatedCertificates.map((cert) => (
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

      {/* 📄 Paginazione */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-6 text-white">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className="px-3 py-1 bg-gray-200 text-gray-800 rounded disabled:opacity-50"
          >
            ◀ Precedente
          </button>
          <span>
            Pagina {page} di {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
            className="px-3 py-1 bg-gray-200 text-gray-800 rounded disabled:opacity-50"
          >
            Successiva ▶
          </button>
        </div>
      )}
    </section>
  );
}
