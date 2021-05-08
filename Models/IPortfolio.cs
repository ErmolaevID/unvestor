using System.Collections.Generic;

namespace unvestor.Models
{
    public interface IPortfolio
    {
        Dictionary<string, List<IStock>> Stocks { get; }
        int OriginPrice { get; set; }
    }
}