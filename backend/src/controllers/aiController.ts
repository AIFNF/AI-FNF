import { Request, Response } from "express";
import Trade from "../models/Trade";

const AI_TRADERS: { [key: string]: (params: any) => string } = {
  "001": (params) => `Executing 001 AI: ${params.strategy}`,
  "SAM": (params) => `Executing S.A.M AI: Stop-Loss ${params.stopLoss}`,
  "Ivy": (params) => `Executing Ivy AI: Swing trade for ${params.duration} hours`,
  "JEFF": (params) => `Executing JEFF AI: Long-term position in ${params.asset}`,
};

// Run AI Trading
export const runAI = async (req: Request, res: Response): Promise<void> => {
  const { user, aiName, params } = req.body;

  if (!AI_TRADERS[aiName]) {
    res.status(400).json({ error: "Invalid AI name" });
    return;
  }

  const result: string = AI_TRADERS[aiName](params);
  const trade = new Trade({ user, aiName, params, result });
  await trade.save();

  res.json({ message: result });
};

// Get Trading History
export const getTradeHistory = async (req: Request, res: Response): Promise<void> => {
  const { user } = req.params;
  const trades = await Trade.find({ user }).sort({ createdAt: -1 });
  res.json(trades);
};
