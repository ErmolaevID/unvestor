namespace unvestor.Models
{
    public class StandardAchievement : IAchievement
    {
        public int Id { get; }
        public string Title { get; }
        public string Description { get; }
        public bool IsDone { get; set; }

        public StandardAchievement(
            int id,
            string title,
            string description,
            bool isDone = false)
        {
            Id = id;
            Title = title;
            Description = description;
            IsDone = isDone;
        }
    }
}