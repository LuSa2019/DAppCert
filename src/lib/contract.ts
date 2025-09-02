
export async function aggiungiCertificatoSuChain(hash: string): Promise<string> {
  const res = await fetch("/api/aggiungi-certificato", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ hash }),
  });


  if (!res.ok) {
    let msg = "Errore invio transazione";
  try {
    const j = await res.json();
  msg = j.error || msg;
  } catch {}
    throw new Error(msg);
  }


  const data = await res.json();
  return data.txHash as string;
}
