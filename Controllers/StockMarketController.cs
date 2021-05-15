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
        private readonly ICompanyRepository cr = new CompanyRepository();
        private readonly AchievementLogger al = new AchievementLogger();

        [HttpGet("companies")]
        public List<ICompany> AllCompanies() => cr.All();

        [HttpPost("update")]
        public void UpdateStockPrices() => World.Update();

        [HttpGet("{companyTicker}")]
        public ICompany CompanyByTicker(string companyTicker) => 
            cr.CompanyByTicker(companyTicker);

        [HttpPost("buy")]
        public void Buy(BuyStockDto req) => playerService.Buy(req.ticker, req.count);

        [HttpPost("sell")]
        public void Sell(SellStockDto req) => playerService.Sell(req.ticker, req.count);

        [HttpGet("player")]
        public IInvestor PlayerInfo() => playerService.PlayerInfo();
    }
}