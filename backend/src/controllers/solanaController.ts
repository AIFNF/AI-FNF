import { Request, Response } from "express";
import { Connection, PublicKey } from "@solana/web3.js";

const connection = new Connection(process.env.SOLANA_RPC_URL as string, "confirmed");

// Get SOL Balance
export const getSolBalance = async (req: Request, res: Response): Promise<void> => {
  try {
    const { address } = req.params;
    const balance = await connection.getBalance(new PublicKey(address));
    res.json({ address, balance: balance / 1e9 + " SOL" });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch balance" });
  }
};

// Get Recent Transactions
export const getRecentTransactions = async (req: Request, res: Response): Promise<void> => {
  try {
    const { address } = req.params;
    const signatureList = await connection.getConfirmedSignaturesForAddress2(new PublicKey(address));
    res.json(signatureList);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch transactions" });
  }
};