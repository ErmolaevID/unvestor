using System.Collections.Generic;
using unvestor.Models;

namespace unvestor.Services
{
    public interface ICompaniesService
    {
        ICompany CompanyByTicker(string ticker);
        List<ICompany> AllCompanies();
    }
}