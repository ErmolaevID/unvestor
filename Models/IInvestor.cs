using System.Collections.Generic;

namespace unvestor.Models
{
    public interface IInvestor
    {
        int Id { get; }
        int Cash { get; }
        IPortfolio Portfolio { get; }
        void BuyStock(string companyTicker, int count);
    }
}