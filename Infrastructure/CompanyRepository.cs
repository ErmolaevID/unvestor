using System.Collections.Generic;
using System.Linq;
using unvestor.Dto;
using unvestor.Models;

namespace unvestor.Infrastructure
{
    public class CompanyRepository : ICompanyRepository
    {
        private readonly List<ICompany> list;
        private readonly IJSON json;

        public CompanyRepository() : this(new JSON()) {}

        public CompanyRepository(IJSON jsonWorker)
        {
            list = new List<ICompany>();
            json = jsonWorker;
            ParseDto(json.Content<List<CompanyDto>>("Companies.json"));
        }

        public List<ICompany> Content() => list;

        public void Save() =>
            json.Write(
                list
                    .Select(company =>
                        new CompanyDto(
                            company.Title,
                            company.Ticker,
                            company.StockPrice,
                            company.Safety,
                            company.StockPriceHistory,
                            company.IsBankrupt))
                    .ToList(),
                "Companies.json");

        public ICompany CompanyByTicker(string ticker) =>
            list.Find(el => el.Ticker == ticker);

        private void ParseDto(List<CompanyDto> dto)
        {
            foreach (var company in dto)
                list.Add(new StandardCompany(
                    company.Title,
                    company.Ticker,
                    company.StockPrice,
                    company.Safety,
                    company.StockPriceHistory));
        }
    }
}