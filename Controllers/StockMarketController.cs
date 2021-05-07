using System;
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
        public ICompany CompanyByTicker(string companyTicker) => cr.CompanyByTicker(companyTicker);

        [HttpGet("test")]
        public void Get()
        {
            var p = pr.Player();
            p.BuyStock("AAPL", 1);
            p.BuyStock("KNTR", 2);
            pr.Save();
            //World.Update();
        }

        [HttpPost("buy")]
        public void Buy(BuyStockDto req)
        {
            var player = pr.Player();
            player.BuyStock(req.ticker, req.count);
            pr.Save();
        }

        [HttpGet("player")]
        public IInvestor PlayerInfo()
        {
            return pr.Player();
        }
    }
}