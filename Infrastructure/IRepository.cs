namespace unvestor.Infrastructure
{
    public interface IRepository<T>
    {
        T Content();
        void Save();
    }
}