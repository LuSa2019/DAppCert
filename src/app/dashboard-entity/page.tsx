'use client';

import { useState } from 'react';
import { Upload, FileText, LogOut } from 'lucide-react';
import InsertCertificate from './components/InsertCertificate';
import CertificateList from './components/CertificateList';

export default function EntityDashboard() {
  const [activeTab, setActiveTab] = useState<'insert' | 'list'>('insert');

  // TODO: Sostituisci con il vero entityId preso dalla sessione o auth
  const entityId = 'INSERISCI_QUI_L_ID_ENTE';

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-800 text-white p-6 flex flex-col gap-6">
        <h2 className="text-2xl font-bold mb-6">UniChain - Ente</h2>

        <button
          onClick={() => setActiveTab('insert')}
          className={`flex items-center gap-2 py-2 px-4 rounded-lg ${
            activeTab === 'insert' ? 'bg-indigo-600' : 'hover:bg-indigo-700'
          }`}
        >
          <Upload size={20} /> Inserisci Certificato
        </button>

        <button
          onClick={() => setActiveTab('list')}
          className={`flex items-center gap-2 py-2 px-4 rounded-lg ${
            activeTab === 'list' ? 'bg-indigo-600' : 'hover:bg-indigo-700'
          }`}
        >
          <FileText size={20} /> Certificati Emessi
        </button>

        <div className="mt-auto">
          <button className="flex items-center gap-2 text-red-300 hover:text-red-100">
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 p-10 bg-gray-100 overflow-y-auto">
        {activeTab === 'insert' && <InsertCertificate entityId={entityId} />}
        {activeTab === 'list' && <CertificateList entityId={entityId} />}
      </main>
    </div>
  );
}
