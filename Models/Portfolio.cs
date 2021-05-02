using System.Collections.Generic;

namespace unvestor.Models
{
    public class Portfolio : IPortfolio
    {
        public Dictionary<string, List<IStock>> Stocks { get; }
        public int OriginPrice { get; }

        public Portfolio(
            Dictionary<string, List<IStock>> stocks,
            int originPrice)
        {
            Stocks = stocks;
            OriginPrice = originPrice;
        }
    }
}