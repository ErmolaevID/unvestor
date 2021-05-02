namespace unvestor.Dto
{
    public class StockDto
    {
        public string CompanyTitle { get; set; }
        public string CompanyTicker { get; set; }
        public int OriginPrice { get; set; }
        public int PurchaseTime { get; set; }
        public int OwnerId { get; set; }
    }
}