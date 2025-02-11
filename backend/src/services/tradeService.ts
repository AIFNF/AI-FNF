export interface TradeParams {
    strategy: string;
    amount: number;
    type?: "BUY" | "SELL";
    leverage?: number;
    stopLoss?: number;
    targetProfit?: number;
    asset?: string;
  }
  
  export const executeTrade = async (params: TradeParams) => {
    console.log(`🛒 Executing trade for ${params.strategy} - ${params.type} ${params.amount} SOL`);
    return { success: true, params };
  };
  