using System.Collections.Generic;

namespace unvestor.Models
{
    public interface ICompany
    {
        string Title { get; }
        string Ticker { get; } 
        int StockPrice { get; }
        int Safety { get; }
        List<int> StockPriceHistory { get; }
        void UpdateStockPrice();
        List<IStock> Sell(int count, IInvestor buyer);
    }
}