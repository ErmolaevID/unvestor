using unvestor.Infrastructure;
using unvestor.Models;

namespace unvestor.Services
{
    public class PlayerService
    {
        private IPlayerRepository repository;
        private ICompaniesService companiesService;
        
        public PlayerService() : this(
            new PlayerRepository(),
            new CompaniesService()) {}
        
        public PlayerService(
            IPlayerRepository repository,
            ICompaniesService companiesService)
        {
            this.repository = repository;
            this.companiesService = companiesService;
        }

        public IInvestor PlayerInfo() => repository.Player();

        public void Sell(string ticker, int count)
        {
            PlayerInfo().SellStock(companiesService.CompanyByTicker(ticker), count);
            repository.Save();
        }

        public void Buy(string ticker, int count)
        {
            PlayerInfo().BuyStock(companiesService.CompanyByTicker(ticker), count);
            repository.Save();
        }
    }
}