using System;
using System.Collections.Generic;
using unvestor.Infrastructure;

namespace unvestor.Models
{
    public class AchievementManager : IAchievementManager
    {
        public void Check(int[] achievementId, IInvestor player, List<ICompany> companies, List<IAchievement> achievements)
        {
            foreach (var id in achievementId)
            {
                var achievement = achievements.Find(ach => ach.Id == id);
                if (achievement == null)
                    throw new Exception();
                if (achievement.IsDone)
                    continue;
                switch (id)
                {
                    case 1:
                        achievement.IsDone = true;
                        //new AchievementRepository().All().Find(ach => ach.Id == id).IsDone = true;
                        break;
                    case 2:
                        achievement.IsDone = true;
                        break;
                    case 3:
                        foreach (var company in player.Portfolio.Stocks)
                        {
                            foreach (var stock in company.Value)
                            {
                                if (stock.OriginPrice > 1000)
                                    achievement.IsDone = true;
                                break;
                            }
                        }
                        break;
                    case 4:
                        foreach (var company in player.Portfolio.Stocks)
                        {
                            foreach (var stock in company.Value)
                            {
                                if (stock.OriginPrice > 5000)
                                    achievement.IsDone = true;
                                break;
                            }
                        }
                        break;
                    case 5:
                        if (player.Portfolio.Stocks.Count == companies.Count)
                            achievement.IsDone = true;
                        break;
                    case 6:
                        foreach (var company in player.Portfolio.Stocks)
                        {
                            foreach (var stock in company.Value)
                            {
                                if (stock.OriginPrice <= 10)
                                    achievement.IsDone = true;
                            }
                        }
                        break;
                    case 7:
                        foreach (var company in companies)
                        {
                            if (!company.IsBankrupt)
                                continue;
                            if (player.Portfolio.Stocks.ContainsKey(company.Ticker))
                                achievement.IsDone = true;
                        }
                        break;
                }
            }
        }

        // public void Log(int id, IInvestor player)
        // {
        //     var ach = ar.All();
        //     if (id > ach.Count)
        //         throw new Exception("There is no such achievement");
        //     switch (id)
        //     {
        //         case 1:
        //             if (player.Portfolio.Stocks.Count > 0)
        //                 ach[id - 1].IsDone = true;
        //             break;
        //         case 2:
        //             ach[id - 1].IsDone = true;
        //             break;
        //         case 3:
        //             break;
        //     }
        //     ar.Save();
        // }
    }
}