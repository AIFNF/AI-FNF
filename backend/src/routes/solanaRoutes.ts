import express from "express";
import { getSolBalance, getRecentTransactions } from "../controllers/solanaController";

const router = express.Router();

router.get("/solana/balance/:address", getSolBalance);
router.get("/solana/transactions/:address", getRecentTransactions);

export default router;