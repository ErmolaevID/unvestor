using unvestor.Infrastructure;
using unvestor.Models;

namespace unvestor.Services
{
    public class CompaniesService
    {
        private ICompanyRepository repository;

        public CompaniesService() : this(new CompanyRepository()) {}
        
        public CompaniesService(ICompanyRepository repository)
        {
            this.repository = repository;
        }

        public ICompany CompanyByTicker(string ticker) => repository.CompanyByTicker(ticker);
        
    }
}