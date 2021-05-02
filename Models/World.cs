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
                company.UpdateStockPrice();
            
            cr.Save();
        }
        
        private static void UpdateTime() => Time++;
    }
}