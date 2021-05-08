using System.Collections.Generic;
using System.Linq;
using unvestor.Dto;
using unvestor.Models;

namespace unvestor.Infrastructure
{
    public class PlayerRepository
    {
        private IInvestor player;
        private readonly IJSON json;

        public PlayerRepository() : this(new JSON()) {}

        public PlayerRepository(IJSON jsonWorker)
        {
            json = jsonWorker;
            ParseDto(json.Content<PlayerDto>("Player.json"));
        }

        public IInvestor Player() => player;

        public void Save() =>
            json.Write(player, "Player.json");
        

        private void ParseDto(PlayerDto dto)
        {
            var portfolio = new Dictionary<string, List<IStock>>();
            foreach (var (ticker, stocks) in dto.Portfolio.Stocks)
            {
                var stock = stocks
                    .Select(l => 
                        new StandardStock(
                            l.CompanyTitle, 
                            l.CompanyTicker, 
                            l.OriginPrice, 
                            l.PurchaseTime))
                    .Cast<IStock>()
                    .ToList();
                portfolio.Add(ticker, stock);
            }

            var p = new Portfolio(portfolio, dto.Portfolio.OriginPrice);
            player = new Player(dto.Id, dto.Cash, p);
        }
    }
}