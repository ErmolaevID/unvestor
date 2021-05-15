using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using unvestor.Dto;
using unvestor.Infrastructure;
using unvestor.Models;
using unvestor.Services;

namespace unvestor.Controllers
{
    [ApiController]
    [Route("sm")]
    public class StockMarketController : ControllerBase
    {
        private readonly PlayerService playerService = new PlayerService();
        private readonly ICompaniesService companiesService = new CompaniesService();

        [HttpGet("companies")]
        public List<ICompany> AllCompanies() => companiesService.AllCompanies();

        [HttpPost("update")]
        public void UpdateStockPrices() => World.Update();

        [HttpGet("{companyTicker}")]
        public ICompany CompanyByTicker(string companyTicker) => companiesService.CompanyByTicker(companyTicker);

        [HttpPost("buy")]
        public void Buy(BuyStockDto req) => playerService.Buy(req.ticker, req.count);

        [HttpPost("sell")]
        public void Sell(SellStockDto req) => playerService.Sell(req.ticker, req.count);

        [HttpGet("player")]
        public IInvestor PlayerInfo() => playerService.PlayerInfo();
    }
}