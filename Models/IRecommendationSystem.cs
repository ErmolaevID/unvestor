using System.Collections.Generic;

namespace unvestor.Models
{
    public interface IRecommendationSystem
    {
        List<ICompany> Stocks(int cash, List<ICompany> companies);
    }
}