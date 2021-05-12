namespace unvestor.Models
{
    public interface IPlayerRepository
    {
        IInvestor Player();
        void Save();
    }
}