using unvestor.Models;

namespace unvestor.Services
{
    public interface ICompaniesService
    {
        ICompany CompanyByTicker(string ticker);
    }
}