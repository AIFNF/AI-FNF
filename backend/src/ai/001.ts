import { executeTrade } from "../services/tradeService";
import { manageRisk } from "../services/riskManagement";

export const run001 = async () => {
  console.log("🚀 AI 001: High-Frequency Trading (HFT) Started...");

  for (let i = 0; i < 10; i++) {
    const tradeParams = {
      strategy: "HFT",
      amount: Math.random() * 0.01, // Small micro-trades
      leverage: 10,
    };

    const isSafe = manageRisk(tradeParams.amount, "HFT");
    if (!isSafe) continue;

    await executeTrade(tradeParams);
  }

  console.log("✅ AI 001: Trading cycle completed.");
};