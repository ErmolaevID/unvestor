using System;
using unvestor.Infrastructure;

namespace unvestor.Models
{
    public class Player : IInvestor
    {
        public int Id { get; }
        public int Cash { get; set; }
        public IPortfolio Portfolio { get; }
        private readonly ICompanyRepository cr;

        public Player(
            int id,
            int cash,
            IPortfolio portfolio):
            this(id, cash, portfolio, new CompanyRepository()) {}

        public Player(
            int id,
            int cash,
            IPortfolio portfolio,
            ICompanyRepository companyRepository)
        {
            Id = id;
            Cash = cash;
            Portfolio = portfolio;
            cr = companyRepository;
        }

        public void BuyStock(string companyTicker, int count)
        {
            var stocks = 
                cr.
                    CompanyByTicker(companyTicker)
                    .Sell(count, this);
            if (Portfolio.Stocks.ContainsKey(stocks[0].CompanyTicker))
            {
                foreach (var stock in stocks)
                    Portfolio.Stocks[companyTicker].Add(stock);
                return;
            }
            Portfolio.Stocks.Add(companyTicker, stocks);
        }

        public void SellStock(string companyTicker, int count)
        {
            if (!Portfolio.Stocks.ContainsKey(companyTicker)) 
                throw new Exception("You dont have stocks");
            if (Portfolio.Stocks[companyTicker].Count < count)
                throw new Exception("Not enough stocks");
            Portfolio.Stocks[companyTicker].RemoveRange(0, count);
            var currentPrice = cr.CompanyByTicker(companyTicker).StockPrice;
            Cash += currentPrice * count;
        }
    }
}