using System;
using System.Collections.Generic;
using unvestor.Infrastructure;
using unvestor.Models;

namespace unvestor.Services
{
    public class AchievementService : IAchievementService
    {
        private readonly IAchievementRepository achievementRepository;
        private readonly IPlayerRepository playerRepository;
        private readonly ICompanyRepository companyRepository;

        public AchievementService() : this(
            new AchievementRepository(),
            new PlayerRepository(),
            new CompanyRepository()) {}

        public AchievementService(
            IAchievementRepository achievementRepository,
            IPlayerRepository playerRepository,
            ICompanyRepository companyRepository)
        {
            this.achievementRepository = achievementRepository;
            this.playerRepository = playerRepository;
            this.companyRepository = companyRepository;
        }

        public void Check(int id) => Check(new [] { id });

        public void Check(int[] ids)
        {
             foreach (var id in ids)
             {
                 var achievement = achievementRepository.All().Find(ach => ach.Id == id);
                 if (achievement == null)
                     throw new Exception();
                 if (achievement.IsDone)
                     continue;
                 switch (id)
                 {
                     case 1:
                         achievement.IsDone = true;
                         break;
                     case 2:
                         achievement.IsDone = true;
                         break;
                     case 3:
                         foreach (var company in playerRepository.Player().Portfolio.Stocks)
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
                         foreach (var company in playerRepository.Player().Portfolio.Stocks)
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
                         if (playerRepository.Player().Portfolio.Stocks.Count == companyRepository.All().Count)
                             achievement.IsDone = true;
                         break;
                     case 6:
                         foreach (var company in playerRepository.Player().Portfolio.Stocks)
                         {
                             foreach (var stock in company.Value)
                             {
                                 if (stock.OriginPrice <= 10)
                                     achievement.IsDone = true;
                             }
                         }
                         break;
                     case 7:
                         foreach (var company in companyRepository.All())
                         {
                             if (!company.IsBankrupt)
                                 continue;
                             if (playerRepository.Player().Portfolio.Stocks.ContainsKey(company.Ticker))
                                 achievement.IsDone = true;
                         }
                         break;
                 }
             }
             achievementRepository.Save();
        }

        public List<IAchievement> AllAchievements() => achievementRepository.All();
    }
}