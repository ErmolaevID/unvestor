using System.Collections.Generic;

namespace unvestor.Models
{
    public class StockProducer
    {
        private readonly string companyTitle;
        private readonly string companyTicker;
        
        public StockProducer(string companyTitle, string companyTicker)
        {
            this.companyTitle = companyTitle;
            this.companyTicker = companyTicker;
        }
        
        public List<IStock> CreateStocks(int price, int count)
        {
            var temp = new List<IStock>();
            for (var i = 0; i < count; i++)
            {
                temp.Add(new StandardStock(
                    companyTitle, 
                    companyTicker,
                    price));
            }

            return temp;
        }
    }
}