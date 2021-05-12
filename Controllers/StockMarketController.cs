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
        private readonly AchievementLogger al = new AchievementLogger();

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
            var player = pr.Player();
            player.BuyStock(req.ticker, req.count);
            al.Log(1, player);
            pr.Save();
        }

        [HttpPost("sale")]
        // TODO: Rename to sell
        public void Sale(SaleStockDto req)
        {
            pr.Player().SaleStock(req.ticker, req.count);
            al.Log(2, null);
            pr.Save();
        }

        [HttpGet("player")]
        public IInvestor PlayerInfo() => pr.Player();

        [HttpGet("test")]
        public List<IAchievement> Test()
        {
            var r = new AchievementRepository();
            return r.All();
        }
    }
}