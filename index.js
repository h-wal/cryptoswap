import { Connection, Keypair, VersionedTransaction } from "@solana/web3.js";
import axios from "axios";

const connection = new Connection("https://api.mainnet-beta.solana.com", "confirmed");

const secretKey = Uint8Array.from([
  3,67,193,127,194,92,108,3,138,236,21,89,19,103,43,180,174,248,214,247,189,77,149,174,130,220,139,139,144,175,85,121,240,171,225,213,165,178,7,163,111,88,214,176,44,142,168,164,149,118,119,78,45,237,78,33,127,238,101,194,89,14,70,190
]);
const wallet = Keypair.fromSecretKey(secretKey);

const userPublicKey = wallet.publicKey.toBase58();

const url =
  "https://quote-api.jup.ag/v6/quote?" +
  "inputMint=So11111111111111111111111111111111111111112" + 
  "&outputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v" + 
  "&amount=100000" + 
  "&slippageBps=50"; 

async function main() {
  
}

main();
