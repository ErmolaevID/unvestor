namespace unvestor.Models
{
    public interface IAchievement
    {
        int Id { get; }
        public string Title { get; }
        public string Description { get; }
        bool IsDone { get; set; }
        
    }
}