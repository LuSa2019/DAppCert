import { ethers } from "ethers";
import { CertificatiABI } from "../abi/CertificatiABI.js"; // importa l’array

const RPC_URL = "https://eth-sepolia.g.alchemy.com/v2/DDXreGY5nanD7xm1_HMlVTNXeJGUp2JR";
const WALLET_PRIVATE_KEY = "0xc2a1b0058f1d51f23190447ee5a6c340c00bcf9f4aae74845cf84edfac9ab6ba";
const CONTRACT_ADDRESS = "0x4c323D7a113edC4dfe9d639E0acFa7f47B722ed4";

export async function aggiungiCertificato(hash) {
  const provider = new ethers.providers.JsonRpcProvider(RPC_URL, 11155111);
  const wallet = new ethers.Wallet(WALLET_PRIVATE_KEY, provider);

  const contract = new ethers.Contract(CONTRACT_ADDRESS, CertificatiABI, wallet);

  const formattedHash = ethers.utils.hexZeroPad(
    hash.startsWith("0x") ? hash : "0x" + hash,
    32
  );
  
  const tx = await contract.aggiungiCertificato(formattedHash);
  return await tx.wait();
}
