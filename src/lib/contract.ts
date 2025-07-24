import { getMagicProvider } from '@/lib/magic';
import { ethers } from 'ethers';
import { CertificatiABI } from "@/abi/CertificatiABI";

const CONTRACT_ADDRESS = '0x4c323D7a113edC4dfe9d639E0acFa7f47B722ed4';

export async function aggiungiCertificatoSuChain(hash: string) {
  const magicProvider = getMagicProvider();
  if (!magicProvider) throw new Error('Magic provider non disponibile');

  // ethers v5 Web3Provider avvolge il provider Magic senza problemi
  const provider = new ethers.providers.Web3Provider(magicProvider);
  const signer = provider.getSigner();

  const contract = new ethers.Contract(CONTRACT_ADDRESS, CertificatiABI, signer);
  const tx = await contract.aggiungiCertificato(hash);
  await tx.wait();

  return tx.hash;
}
