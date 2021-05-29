using unvestor.Infrastructure;

namespace unvestor.Models
{
    public static class World
    {
        public static int Time { get; private set; } = 0;

        public static void UpdateTime() => Time++;
    }
}