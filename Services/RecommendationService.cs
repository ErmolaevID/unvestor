using System.Collections.Generic;
using unvestor.Models;

namespace unvestor.Services
{
    public class RecommendationService : IRecommendationService
    {
        private readonly IRecommendationSystem recommendationSystem = new RecommendationSystem();
        private readonly ICompaniesService companiesService = new CompaniesService();
        private readonly IPlayerService playerService = new PlayerService();
        
        public List<ICompany> Stocks() => recommendationSystem
            .Stocks(playerService.PlayerInfo().Cash, companiesService.AllCompanies());
        
    }
}