namespace unvestor.Models
{
    public class StandardStock : IStock
    {
        public string CompanyTitle { get; }
        public string CompanyTicker { get; }
        public int OriginPrice { get; }
        public int PurchaseTime { get; }
        public int OwnerId { get; }

        public StandardStock(
            string companyTitle, 
            string companyTicker, 
            int price)
        {
            // TODO: Использовать здесь основной констркутор 
            CompanyTitle = companyTitle;
            CompanyTicker = companyTicker;
            OriginPrice = price;
            PurchaseTime = World.Time;
        }

        public StandardStock(
            string companyTitle,
            string companyTicker,
            int price,
            int purchaseTime,
            int ownerId)
        {
            // Основной констркутор 
            CompanyTitle = companyTitle;
            CompanyTicker = companyTicker;
            OriginPrice = price;
            PurchaseTime = purchaseTime;
            OwnerId = ownerId;
        }
    }
}