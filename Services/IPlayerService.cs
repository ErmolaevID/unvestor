using unvestor.Models;

namespace unvestor.Services
{
    public interface IPlayerService
    {
        IInvestor PlayerInfo();
        void Sell(string ticker, int count);
        void Buy(string ticker, int count);
    }
}