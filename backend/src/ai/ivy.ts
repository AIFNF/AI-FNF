import { executeTrade } from "../services/tradeService";
import { getSolanaPrice } from "../services/solanaService";

export const runIvy = async () => {
  console.log("🌊 AI IVY: Swing Trading Started...");

  const price = await getSolanaPrice();
  const stopLoss = price * 0.95; // 5% Stop Loss
  const targetProfit = price * 1.1; // 10% Profit Target

  console.log(`🔍 Entry Price: ${price}, Target: ${targetProfit}, Stop Loss: ${stopLoss}`);

  await executeTrade({
    strategy: "Swing",
    amount: 0.5,
    stopLoss,
    targetProfit,
    type: "BUY",
  });

  console.log("✅ Trade Executed with Swing Strategy");
};