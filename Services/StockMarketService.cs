using unvestor.Infrastructure;
using unvestor.Models;

namespace unvestor.Services
{
    public class StockMarketService : IStockMarketService
    {
        private readonly AchievementService achievementService;
        private readonly ICompanyRepository companyRepository;
        private readonly IPlayerRepository playerRepository;

        public StockMarketService(): this(
            new CompanyRepository(),
            new PlayerRepository(),
            new AchievementService()) {}
        
        public StockMarketService(
            ICompanyRepository companyRepository,
            IPlayerRepository playerRepository,
            AchievementService achievementService)
        {
            this.companyRepository = companyRepository;
            this.playerRepository = playerRepository;
            this.achievementService = achievementService;
        }

        public void Update()
        {
            foreach (var company in companyRepository.Content())
            {
                company.UpdateStockPrice();
                if (company.IsBankrupt)
                {
                    var player = playerRepository.Content();
                    achievementService.Check(new [] { 7 });
                    player.Portfolio.Stocks.Remove(company.Ticker);
                    playerRepository.Save();
                }
            }
            companyRepository.Save();
        }
    }
}