import { executeTrade } from "../services/tradeService";

export const runJeff = async () => {
  console.log("🏦 AI JEFF: Long-Term Investment Started...");

  const assets = ["SOL", "ETH", "BTC"];
  const allocation = [50, 30, 20]; // Percentage allocation

  for (let i = 0; i < assets.length; i++) {
    await executeTrade({
      strategy: "Long-Term",
      asset: assets[i],
      amount: allocation[i],
      type: "BUY",
    });
  }

  console.log("✅ AI JEFF: Portfolio updated.");
};