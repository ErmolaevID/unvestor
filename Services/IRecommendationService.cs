using System.Collections.Generic;
using unvestor.Models;

namespace unvestor.Services
{
    public interface IRecommendationService
    {
        List<ICompany> Stocks(int cash);
    }
}