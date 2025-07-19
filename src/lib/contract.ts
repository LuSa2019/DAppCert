// lib/contract.ts
import { ethers } from "ethers";
import CertificatiABI from "../abi/CertificatiAbi.json";

const CONTRACT_ADDRESS = "0xd9145CCE52D386f254917e481eB44e9943F39138"; // inserisci il tuo

// Con Magic o MetaMask collegato
export function getContract(signerOrProvider: ethers.Signer | ethers.Provider) {
  return new ethers.Contract(CONTRACT_ADDRESS, CertificatiABI, signerOrProvider);
}
