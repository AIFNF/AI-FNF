import { Connection, PublicKey } from "@solana/web3.js";

const SOLANA_RPC_URL = "https://api.mainnet-beta.solana.com";
const connection = new Connection(SOLANA_RPC_URL);

export const getSolanaPrice = async (minutes: number = 1): Promise<number[]> => {
  return new Array(minutes).fill(0).map(() => 20 + Math.random() * 5);
};

export const getSolanaBalance = async (address: string): Promise<number> => {
  const publicKey = new PublicKey(address);
  const balance = await connection.getBalance(publicKey);
  return balance / 1e9;
};