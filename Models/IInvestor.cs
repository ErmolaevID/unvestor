using System.Collections.Generic;

namespace unvestor.Models
{
    public interface IInvestor
    {
        int Id { get; }
        int Cash { get; set; }
        IPortfolio Portfolio { get; }
        void BuyStock(string companyTicker, int count);
        void SellStock(string companyTicker, int count);
    }
}