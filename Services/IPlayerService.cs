using System.Collections.Generic;
using unvestor.Models;

namespace unvestor.Services
{
    public interface IPlayerService
    {
        IInvestor PlayerInfo();
        void Sell(ICompany company, int count);
        void Buy(ICompany company, int count);
    }
}