using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using unvestor.Infrastructure;
using unvestor.Models;
using unvestor.Services;

namespace unvestor.Controllers
{
    [ApiController]
    [Route("ach")]
    public class AchievementsController
    {
        private readonly IAchievementService achievementService = new AchievementService();

        [HttpGet("achievements")]
        public List<IAchievement> AllAchievements() => achievementService.AllAchievements();
    }
}