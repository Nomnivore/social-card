using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using server.Models;
using server.Services;
using server.ViewModels;

namespace server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [Produces("application/json")]
    public class CardController : ControllerBase
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly ILinkService _linkService;

        public CardController(UserManager<AppUser> userManager, ILinkService linkService)
        {
            _userManager = userManager;
            _linkService = linkService;
        }

        [HttpGet]
        [Route("{username}")]
        public async Task<IActionResult> GetCard(string username)
        {
            // this should leverage an IUserService class probably, but just getting it functioning for now
            AppUser user = await _userManager.FindByNameAsync(username);

            if (user == null)
                return NotFound(new Response { Error = true, Message = "User not found" });

            var links = _linkService.GetLinksByUserId(user.Id).ToList();

            return Ok(new CardResponse { Username = user.UserName, Links = links });
        }
    }
}
