namespace unvestor.Models
{
    public interface IStock
    {
        string CompanyTitle { get; } 
        string CompanyTicker { get; }
        int OriginPrice { get; }
        int PurchaseTime { get; }
    }
}