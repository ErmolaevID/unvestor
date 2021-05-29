using System;
using System.Collections.Generic;

namespace unvestor.Models
{
    public interface IAchievementManager
    {
        void Check(int[] achievementId, IInvestor player, List<ICompany> companies, List<IAchievement> achievements);
    }
}