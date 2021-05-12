using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using unvestor.Infrastructure;
using unvestor.Models;

namespace unvestor.Controllers
{
    [ApiController]
    [Route("ach")]
    public class AchievementsController
    {
        private readonly AchievementRepository ar = new AchievementRepository();

        [HttpGet("achievements")]
        public List<IAchievement> AllAchievements() => ar.All();
    }
}