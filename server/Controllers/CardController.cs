using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using server.Models;
using server.Repositories;
using System.Runtime.CompilerServices;

namespace server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CardController : ControllerBase
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly ILinkRepository _linkRepository;

        public CardController(UserManager<AppUser> userManager, ILinkRepository linkRepository)
        {
            _userManager = userManager;
            _linkRepository = linkRepository;
        }

        [HttpGet]
        [Route("test")]
        public async Task<string> Test()
        {
            var user = _userManager.Users.ToList<AppUser>()[0];
            var links = _linkRepository.GetAll();

            return links.First<Link>().Url;
        }
    }
}
