namespace unvestor.Infrastructure
{
    public interface IJSON
    { 
        T Content<T>(string path);
        void Write<T>(T obj, string fileName);
    }
}