using System;
using System.Collections.Generic;

namespace unvestor.Models
{
    public class StandardCompany : ICompany
    {
        private StockProducer stockProducer;
        public string Title { get; }
        public string Ticker { get; }
        private int stockPrice;
        public int StockPrice
        {
            get => stockPrice;
            private set
            {
                StockPriceHistory.Add(value);
                stockPrice = value;
            }
        }
        public int Safety { get; }
        public List<int> StockPriceHistory { get; }
        private readonly Random rnd = new Random();

        public StandardCompany(
            string title, 
            string ticker, 
            int stockPrice, 
            int safety, 
            List<int> stockPriceHistory)
        {
            Title = title;
            Ticker = ticker;
            this.stockPrice = stockPrice;
            Safety = safety < 11 ? safety : 4;
            StockPriceHistory = stockPriceHistory;
            stockProducer = new StockProducer(title, ticker);
        }
        
        public void UpdateStockPrice()
        {
            var n = rnd.Next(0, 10) * (11 - Safety);
            if (rnd.Next(0, 2) == 0)
            {
                StockPrice -= n;
                return;
            }
            StockPrice += n;
        }

        public List<IStock> Sell(int count, IInvestor buyer)
        {
            if (!(buyer.Cash >= stockPrice * count))
                throw new Exception("Not enough money");
            buyer.Cash -= stockPrice * count;
            buyer.Portfolio.OriginPrice += stockPrice * count;
            return stockProducer.CreateStocks(stockPrice, count);
        }
    }
}