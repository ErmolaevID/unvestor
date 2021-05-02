using System.IO;
using System.Text.Json;

namespace unvestor.Infrastructure
{
    public class JSON : IJSON
    {
        public T Content<T>(string path) =>
            JsonSerializer.Deserialize<T>(File.ReadAllText(path));
        
        public void Write<T>(T obj, string fileName) => 
            File.WriteAllText(
                fileName,
                JsonSerializer.Serialize(obj));
    }
}