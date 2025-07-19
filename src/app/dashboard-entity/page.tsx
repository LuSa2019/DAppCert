// app/dashboard-ente/page.tsx
"use client";

import { useState} from "react";
import { ethers } from "ethers";
import { getContract } from "@/lib/contract";

export default function EntityDashboard() {
  const [studentAddress, setStudentAddress] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const issueCertificate = async () => {
    try {
      if (!window.ethereum) throw new Error("Wallet non rilevato");

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const contract = getContract(signer);

      const tx = await contract.issueCertificate(studentAddress, title);
      await tx.wait();

      setMessage("Certificato emesso con successo!");
    } catch (error: unknown) {
        if (error instanceof Error) {
          setMessage(`Errore: ${error.message}`);
        } else {
          setMessage('Errore sconosciuto');
        }
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Dashboard Ente – Emissione Certificato</h1>
      <input
        type="text"
        placeholder="Indirizzo studente"
        value={studentAddress}
        onChange={(e) => setStudentAddress(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Titolo certificato"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
      />
      <button onClick={issueCertificate} className="bg-blue-600 text-white px-4 py-2 rounded">
        Rilascia Certificato
      </button>
      {message && <p className="mt-4 text-sm">{message}</p>}
    </div>
  );
}
