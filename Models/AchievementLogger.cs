using System;
using unvestor.Infrastructure;

namespace unvestor.Models
{
    public class AchievementLogger
    {
        private readonly AchievementRepository ar = new AchievementRepository();
        
        public void Log(int id, IInvestor player)
        {
            var ach = ar.All();
            if (id > ach.Count)
                throw new Exception("There is no such achievement");
            switch (id)
            {
                case 1:
                    if (player.Portfolio.Stocks.Count > 0)
                        ach[id - 1].IsDone = true;
                    break;
                case 2:
                    ach[id - 1].IsDone = true;
                    break;
                case 3:
                    break;
            }
            ar.Save();
        }
    }
}