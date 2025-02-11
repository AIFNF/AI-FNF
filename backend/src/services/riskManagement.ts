export const manageRisk = (amount: number, strategy: string): boolean => {
    if (amount > 1) {
      console.log(`🚨 Trade blocked: ${strategy} attempted to trade too much!`);
      return false;
    }
    return true;
  };
  