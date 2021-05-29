using System;
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
        private readonly IPlayerService playerService = new PlayerService();
        private readonly ICompaniesService companiesService = new CompaniesService();
        private readonly IRecommendationService recommendationService = new RecommendationService();
        private readonly IStockMarketService stockMarketService = new StockMarketService();
        private readonly IAchievementService achievementService = new AchievementService();

        [HttpGet("companies")]
        public List<ICompany> AllCompanies() => companiesService.AllCompanies();

        [HttpPost("update")]
        public void UpdateStockPrices() => stockMarketService.Update();

        [HttpGet("{companyTicker}")]
        public ICompany CompanyByTicker(string companyTicker) => companiesService.CompanyByTicker(companyTicker);

        [HttpPost("buy")]
        public void Buy(BuyStockDto req)
        {
            playerService.Buy(
                companiesService.CompanyByTicker(req.ticker), req.count);
            achievementService.Check(new [] { 1, 3, 4, 5, 6 });
        }

        [HttpPost("sell")]
        public void Sell(SellStockDto req)
        {
            playerService.Sell(
                companiesService.CompanyByTicker(req.ticker), req.count);
            achievementService.Check(new [] { 2 });
        }

        [HttpGet("player")]
        public IInvestor PlayerInfo() => playerService.PlayerInfo();

        [HttpGet("recommendations")]
        public List<ICompany> Recommendations() => recommendationService.Stocks(playerService.PlayerInfo().Cash);
    }
}