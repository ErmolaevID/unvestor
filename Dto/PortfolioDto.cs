using System.Collections.Generic;

namespace unvestor.Dto
{
    public class PortfolioDto
    {
        public Dictionary<string, List<StockDto>> Stocks { get; set; }
        public int OriginPrice { get; set; }
    }
}