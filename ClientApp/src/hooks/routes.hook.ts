export const useRoutes = () => {
  return {
    dashboard: () => "/dashboard",
    companies: () => "/companies",
    companyByTicker: () => "/company/:ticker",
    potrfolio: () => "/portfolio",
    achievements: () => "/achievements",
    recommendations: () => "/recommendations",
  };
};