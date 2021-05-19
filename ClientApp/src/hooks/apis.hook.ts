export const useAPIs = () => {
  return {
    allCompanies: "/sm/companies",
    allAchievements: "/ach/achievements",
    companyByTicker: (ticker: string) => `/sm/${ticker}`,
    sellOrBuyStocks: (action: "sell" | "buy") => `/sm/${action}`,
    updateStockMarket: "/sm/update",
    player: "sm/player",
    recommendations: "sm/recommendations"
  };
};
