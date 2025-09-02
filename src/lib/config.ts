// lib/config.ts
export function getConfig() {
  const RPC_URL = process.env.RPC_URL!;
  const WALLET_PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY!;
  const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS!;

  if (!RPC_URL || !WALLET_PRIVATE_KEY || !CONTRACT_ADDRESS) {
    throw new Error("⚠ Variabili di ambiente mancanti!");
  }

  return { RPC_URL, WALLET_PRIVATE_KEY, CONTRACT_ADDRESS };
}
