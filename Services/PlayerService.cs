using unvestor.Infrastructure;
using unvestor.Models;

namespace unvestor.Services
{
    public class PlayerService
    {
        private IPlayerRepository repository;
        
        public PlayerService() : this(new PlayerRepository()) {}
        
        public PlayerService(IPlayerRepository repository)
        {
            this.repository = repository;
        }

        public IInvestor PlayerInfo() => repository.Player();

        public void Sell(string ticker, int count)
        {
            PlayerInfo().SellStock(ticker, count);
            repository.Save();
        }

        public void Buy(string ticker, int count)
        {
            PlayerInfo().BuyStock(ticker, count);
            repository.Save();
        }
    }
}