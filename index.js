import { Connection, Keypair, VersionedTransaction } from "@solana/web3.js";
import axios from "axios";

const connection = new Connection("https://api.mainnet-beta.solana.com", "confirmed");

const secretKey = Uint8Array.from("enter secret key");
const wallet = Keypair.fromSecretKey(secretKey);

const userPublicKey = wallet.publicKey.toBase58();

const url =
  "https://quote-api.jup.ag/v6/quote?" +
  "inputMint=So11111111111111111111111111111111111111112" + 
  "&outputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v" + 
  "&amount=100000" + 
  "&slippageBps=50"; 

async function main() {
  try {

    const quoteRes = await axios.get(url, { headers: { Accept: "application/json" } });
    const quote = quoteRes.data;
    console.log("Quote outAmount:", quote.outAmount);


    const swapRes = await axios.post("https://quote-api.jup.ag/v6/swap", {
      userPublicKey,
      quoteResponse: quote,
      wrapAndUnwrapSol: true,
      dynamicComputeUnitLimit: true,
      prioritizationFeeLamports: "auto",
    });

    console.log("Got swap tx from Jupiter");


    const swapTransactionBuf = Buffer.from(swapRes.data.swapTransaction, "base64");
    const transaction = VersionedTransaction.deserialize(swapTransactionBuf);


    transaction.sign([wallet]);


    const txid = await connection.sendTransaction(transaction, { skipPreflight: false });
    console.log("✅ Sent tx:", txid);

    await connection.confirmTransaction(txid);
    console.log("✅ Swap confirmed!");
  } catch (err) {
    console.error("Error:", err.response?.data || err.message);
  }
}

main();
