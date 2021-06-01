using System.Collections.Generic;
using System.Linq;
using unvestor.Dto;
using unvestor.Models;

namespace unvestor.Infrastructure
{
    public class AchievementRepository : IAchievementRepository
    {
        private readonly List<IAchievement> achievements;
        private readonly IJSON json;
        
        public AchievementRepository(): this(new JSON()) {}
        
        public AchievementRepository(IJSON jsonWorker)
        {
            achievements = new List<IAchievement>();
            json = jsonWorker;
            ParseDto(json.Content<List<AchievementDto>>("Achievements.json"));
        }

        public List<IAchievement> Content() => achievements;

        public void Save() =>
            json.Write(
                achievements
                    .Select(ach => 
                        new AchievementDto(
                            ach.Id, 
                            ach.Title, 
                            ach.Description, 
                            ach.IsDone))
                    .ToList(),
                "Achievements.json");
        

        private void ParseDto(List<AchievementDto> dto)
        {
            foreach (var achievement in dto)
                achievements.Add(new StandardAchievement(
                    achievement.Id,
                    achievement.Title,
                    achievement.Description,
                    achievement.IsDone));
        }
    }
}