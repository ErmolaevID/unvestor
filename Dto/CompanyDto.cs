using System.Collections.Generic;

namespace unvestor.Dto
{
    public class CompanyDto
    {
        public string Title { get; set; }
        public string Ticker { get; set; }
        public int StockPrice { get; set; }
        public int Safety { get; set; }
        public List<int> StockPriceHistory { get; set; }
        public bool IsBankrupt { get; set; }

        public CompanyDto(
            string title,
            string ticker,
            int stockPrice,
            int safety,
            List<int> stockPriceHistory,
            bool isBankrupt)
        {
            Title = title;
            Ticker = ticker;
            StockPrice = stockPrice;
            Safety = safety;
            StockPriceHistory = stockPriceHistory;
            IsBankrupt = isBankrupt;
        }
    }
}