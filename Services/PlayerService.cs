using System.Collections.Generic;
using unvestor.Infrastructure;
using unvestor.Models;

namespace unvestor.Services
{
    public class PlayerService : IPlayerService
    {
        private IPlayerRepository repository;

        public PlayerService() : this(new PlayerRepository()) {}
        
        public PlayerService(IPlayerRepository repository) => this.repository = repository;

        public IInvestor PlayerInfo() => repository.Content();

        public void Sell(ICompany company, int count)
        {
            PlayerInfo().SellStock(company, count);
            repository.Save();
        }

        public void Buy(ICompany company, int count)
        {
            PlayerInfo().BuyStock(company, count);
            repository.Save();
        }
    }
}