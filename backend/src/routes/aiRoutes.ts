import express from "express";
import { runAI, getTradeHistory } from "../controllers/aiController";

const router = express.Router();

router.post("/run-ai", runAI);
router.get("/trade-history/:user", getTradeHistory);

export default router;