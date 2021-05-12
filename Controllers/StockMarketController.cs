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
        private readonly ICompanyRepository cr = new CompanyRepository();
        private readonly IPlayerRepository pr = new PlayerRepository();
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

        [HttpPost("sell")]
        public void Sell(SellStockDto req)
        {
            pr.Player().SellStock(req.ticker, req.count);
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