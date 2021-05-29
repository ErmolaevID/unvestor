using System.Collections.Generic;

namespace unvestor.Models
{
    public interface ICompanyRepository
    {
        List<ICompany> All();
        void Save();
        ICompany CompanyByTicker(string ticker);
    }
}