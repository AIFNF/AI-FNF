import { executeTrade } from "../services/tradeService";
import { getSolanaPrice } from "../services/solanaService";

export const runSAM = async () => {
  console.log("📈 AI SAM: Momentum Trading Started...");

  const priceHistory = await getSolanaPrice(5); // Get last 5-minute prices
  const priceChange = priceHistory[4] - priceHistory[0];

  if (priceChange > 0.5) {
    console.log("🔥 Uptrend detected! Buying...");
    await executeTrade({ strategy: "Momentum", amount: 0.1, type: "BUY" });
  } else if (priceChange < -0.5) {
    console.log("📉 Downtrend detected! Selling...");
    await executeTrade({ strategy: "Momentum", amount: 0.1, type: "SELL" });
  } else {
    console.log("⚠️ No strong momentum detected. Skipping trade.");
  }
};