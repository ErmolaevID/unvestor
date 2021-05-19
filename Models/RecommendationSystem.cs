using System.Collections.Generic;
using System.Linq;

namespace unvestor.Models
{
    public class RecommendationSystem : IRecommendationSystem
    {
        public List<ICompany> Stocks(int cash, List<ICompany> companies)
        {
            var res = new List<ICompany>();
            foreach (var company in companies.OrderByDescending(company => company.StockPrice))
            {
                if (company.StockPrice > cash) 
                    continue;
                cash -= company.StockPrice;
                res.Add(company);
            }

            return res;
        }
    }
}