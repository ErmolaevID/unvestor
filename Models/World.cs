using unvestor.Infrastructure;

namespace unvestor.Models
{
    public static class World
    {
        public static int Time { get; private set; } = 0;
        private static CompanyRepository cr = new CompanyRepository();

        public static void Update()
        {
            UpdateTime();
            foreach (var company in cr.All())
            {
                company.UpdateStockPrice();
                if (company.IsBankrupt)
                {
                    var pr = new PlayerRepository();
                    pr.Player().Portfolio.Stocks.Remove(company.Ticker);
                    pr.Save();
                }
            }
            cr.Save();
        }
        
        private static void UpdateTime() => Time++;
    }
}