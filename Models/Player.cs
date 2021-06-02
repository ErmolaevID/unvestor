using System;

namespace unvestor.Models
{
    public class Player : IInvestor
    {
        public int Id { get; }
        public int Cash { get; set; }
        public IPortfolio Portfolio { get; }
        
        public Player(
            int id,
            int cash,
            IPortfolio portfolio)
        {
            Id = id;
            Cash = cash;
            Portfolio = portfolio;
        }

        public void BuyStock(ICompany company, int count)
        {
            var stocks = company.Sell(count, this);
            if (Portfolio.Stocks.ContainsKey(stocks[0].CompanyTicker))
            {
                foreach (var stock in stocks)
                    Portfolio.Stocks[company.Ticker].Add(stock);
                return;
            }
            Portfolio.Stocks.Add(company.Ticker, stocks);
        }

        public void SellStock(ICompany company, int count)
        {
            if (!Portfolio.Stocks.ContainsKey(company.Ticker)) 
                throw new Exception("You dont have stocks");
            if (Portfolio.Stocks[company.Ticker].Count < count)
                throw new Exception("Not enough stocks");
            Portfolio.Stocks[company.Ticker].RemoveRange(0, count);
            if (Portfolio.Stocks[company.Ticker].Count == 0)
                Portfolio.Stocks.Remove(company.Ticker);
            var currentPrice = company.StockPrice;
            Cash += currentPrice * count;
        }
    }
}