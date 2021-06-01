using System.Collections.Generic;
using unvestor.Models;

namespace unvestor.Infrastructure
{
    public interface ICompanyRepository : IRepository<List<ICompany>>
    {
        ICompany CompanyByTicker(string ticker);
    }
}