using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using unvestor.Dto;
using unvestor.Infrastructure;
using unvestor.Models;

namespace unvestor.Controllers
{
    [ApiController]
    [Route("sm")]
    public class StockMarketController : ControllerBase
    {
        private readonly CompanyRepository cr = new CompanyRepository();
        private readonly PlayerRepository pr = new PlayerRepository();

        [HttpGet("companies")]
        public List<ICompany> AllCompanies() => cr.All();

        [HttpPost("update")]
        public void UpdateStockPrices() => World.Update();

        [HttpGet("{companyTicker}")]
        public ICompany CompanyByTicker(string companyTicker) => 
            cr.CompanyByTicker(companyTicker);

        [HttpPost("buy")]
        public void Buy(BuyStockDto req)
        {
            pr.Player().BuyStock(req.ticker, req.count);
            pr.Save();
        }

        [HttpPost("sale")]
        public void Sale(SaleStockDto req)
        {
            pr.Player().SaleStock(req.ticker, req.count);
            pr.Save();
        }

        [HttpGet("player")]
        public IInvestor PlayerInfo() => pr.Player();
    }
}