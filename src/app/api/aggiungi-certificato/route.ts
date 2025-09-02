// app/api/aggiungi-certificato/route.ts
import { ethers } from "ethers";
import { NextResponse } from "next/server";
import { CertificatiABI } from "@/abi/CertificatiABI";
import { getConfig } from "@/lib/config";

export const runtime = "nodejs"; // ✅ puoi anche toglierlo se vuoi girare su edge

export async function POST(req: Request) {
  try {
    const { hash } = await req.json();

    if (!hash || typeof hash !== "string") {
      return NextResponse.json(
        { error: "Hash mancante o non valido" },
        { status: 400 }
      );
    }

    const { RPC_URL, WALLET_PRIVATE_KEY, CONTRACT_ADDRESS } = getConfig();
    console.log("👉 RPC_URL:", RPC_URL);

    // ✅ ethers v6: provider con fetch nativo
    const provider = new ethers.JsonRpcProvider(RPC_URL, {
      chainId: 11155111,
      name: "sepolia",
    });

    // 🔍 Test connessione
    const block = await provider.getBlockNumber();
    console.log("⛓️ Block corrente:", block);

    // Wallet (ethers v6 usa "new Wallet" allo stesso modo)
    const wallet = new ethers.Wallet(WALLET_PRIVATE_KEY, provider);
    console.log("✅ Wallet pronto:", wallet.address);

    // Contratto
    const contract = new ethers.Contract(CONTRACT_ADDRESS, CertificatiABI, wallet);
    console.log("✅ Contratto connesso:", contract.target);

    // Formattazione hash
    const formattedHash = ethers.zeroPadValue(
      hash.startsWith("0x") ? hash : "0x" + hash,
      32
    );

    // Transazione
    const tx = await contract.aggiungiCertificato(formattedHash);
    const receipt = await tx.wait();

    return NextResponse.json({
      message: "Certificato aggiunto con successo",
      txHash: tx.hash,
      blockNumber: receipt.blockNumber,
    });
  } catch (err: unknown) {
    console.error("❌ Errore API aggiungi-certificato:", err);

    // Cast a oggetto per poter accedere alle proprietà dinamiche
    const error = err as {
      revert?: { args?: string[] };
      shortMessage?: string;
      message?: string;
    };

    // 👉 Gestione elegante errori di revert ethers v6
    if (error?.revert?.args?.[0]) {
      return NextResponse.json({ error: error.revert.args[0] }, { status: 400 });
    }

    if (error?.shortMessage) {
      return NextResponse.json({ error: error.shortMessage }, { status: 400 });
    }

    return NextResponse.json(
      { error: error?.message ?? "Errore interno" },
      { status: 500 }
    );
    }
}
