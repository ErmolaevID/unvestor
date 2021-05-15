using System.Collections.Generic;
using unvestor.Infrastructure;
using unvestor.Models;

namespace unvestor.Services
{
    public class CompaniesService : ICompaniesService
    {
        private ICompanyRepository repository;

        public CompaniesService() : this(new CompanyRepository()) {}
        
        public CompaniesService(ICompanyRepository repository)
        {
            this.repository = repository;
        }

        public List<ICompany> AllCompanies() => repository.All();
        
        public ICompany CompanyByTicker(string ticker) => repository.CompanyByTicker(ticker);
        
    }
}