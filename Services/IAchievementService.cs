using System.Collections.Generic;
using unvestor.Models;

namespace unvestor.Services
{
    public interface IAchievementService
    {
        void Check(int id);
        void Check(int[] ids);
        List<IAchievement> AllAchievements();
    }
}