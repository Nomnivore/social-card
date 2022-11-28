using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query;
using server.Models;
using server.Services;
using server.ViewModels;

namespace server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
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
        [Route("{username?}")]
        public async Task<IActionResult> Get(string username)
        {
            // this should leverage an IUserService class probably, but just getting it functioning for now
            AppUser user = await _userManager.FindByNameAsync(username);

            if (user == null)
                return NotFound(new Response { Error = true, Message = "User not found" });

            var links = _linkService.GetLinksByUserId(user.Id).ToList();

            return Ok(new CardResponse { Username = user.UserName, Links = links });
        }

        [HttpGet]
        [Route("")]
        public IActionResult Index([FromQuery] IndexParams query)
        {
            // /card?searchQuery=bar&linkTypeFilter=

            var users = _userManager.Users.Include(x => x.Links);
            
            if (query.searchQuery != null)
            {
                users = users.Where(user => user.UserName.Contains(query.searchQuery)).Include(x => x.Links);
            }

            if (users != null && query.linkTypeFilter != null)
            {
                users = users.Where(user => user.Links.Any(link => link.LinkType == query.linkTypeFilter)).Include(x => x.Links);
            }

            var cards = new List<CardResponse>();

            if (users == null)
                return Ok(new Response { Message = "Query returned no results" });
            
            foreach (var user in users.ToList())
            {
                cards.Add(new CardResponse { Username = user.UserName, Links = user.Links });

            }

            return Ok(new IndexResponse { Cards = cards } );
        }
    }

    public class IndexParams
    {
        public string? searchQuery { get; set; }
        public LinkTypeEnum? linkTypeFilter { get; set; }
    }
}
