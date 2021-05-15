using System.Collections.Generic;

namespace unvestor.Models
{
    public interface IInvestor
    {
        int Id { get; }
        int Cash { get; set; }
        IPortfolio Portfolio { get; }
        void BuyStock(ICompany company, int count);
        void SellStock(ICompany company, int count);
    }
}