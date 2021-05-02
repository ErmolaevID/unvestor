using unvestor.Infrastructure;

namespace unvestor.Models
{
    public class Player : IInvestor
    {
        public int Id { get; }
        public int Cash { get; }
        public IPortfolio Portfolio { get; }
        private readonly CompanyRepository cr = new CompanyRepository();

        public Player(
            int id,
            int cash,
            IPortfolio portfolio)
        {
            Id = id;
            Cash = cash;
            Portfolio = portfolio;
        }

        public void BuyStock(string companyTicker, int count)
        {
            var stocks = 
                cr.
                    CompanyByTicker(companyTicker)
                    .Sell(count);
            if (Portfolio.Stocks.ContainsKey(stocks[0].CompanyTicker))
            {
                foreach (var stock in stocks)
                    Portfolio.Stocks[companyTicker].Add(stock);
                return;
            }
            Portfolio.Stocks.Add(companyTicker, stocks);
        }
        
        
    }
}