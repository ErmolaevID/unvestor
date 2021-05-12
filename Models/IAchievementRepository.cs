using System.Collections.Generic;

namespace unvestor.Models
{
    public interface IAchievementRepository
    {
        List<IAchievement> All();
        void Save();
    }
}