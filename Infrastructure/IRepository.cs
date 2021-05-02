using System.Collections.Generic;

namespace unvestor.Infrastructure
{
    public interface IRepository<T>
    {
        T All();
        void Save();
    }
}