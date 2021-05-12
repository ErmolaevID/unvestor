namespace unvestor.Dto
{
    public class AchievementDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public bool IsDone { get; set; }

        public AchievementDto(
            int id,
            string title,
            string description,
            bool isDone)
        {
            Id = id;
            Title = title;
            Description = description;
            IsDone = isDone;
        }
    }
}