using System.Collections.Generic;
using System.Linq;
using unvestor.Infrastructure;
using unvestor.Models;

namespace unvestor.Services
{
    public class RecommendationService : IRecommendationService
    {
        private readonly ICompanyRepository companyRepository;

        public RecommendationService() : this(new CompanyRepository()) {}

        public RecommendationService(ICompanyRepository companyRepository) =>
            this.companyRepository = companyRepository;

        public List<ICompany> Stocks(int cash)
        {
            var res = new List<ICompany>();
            foreach (var company in companyRepository.Content().OrderByDescending(company => company.StockPrice))
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