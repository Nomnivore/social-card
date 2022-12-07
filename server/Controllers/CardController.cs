using Microsoft.AspNetCore.Authorization;
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

        // Delete route: Accepts a list of IDs corresponding to Links that should be deleted
        // using POST so that it can accept JSON
        [HttpPost]
        [Authorize]
        [Route("{username?}/delete")]
        public async Task<IActionResult> Delete(string username, [FromBody] DeleteRequest req)
        {
            AppUser user = await _userManager.FindByNameAsync(username);

            if (user == null)
                return NotFound(new Response { Error = true, Message = "User not found" });

            if (user.UserName != User?.Identity?.Name)
            {
                return Unauthorized(new Response { Error = true, Message = "You can only modify your own card" });
            }

            // authorized
            await _linkService.DeleteLinksById(req.Ids);

            return Ok();
        }

        [HttpPost]
        [Authorize]
        [Route("{username?}")]
        public async Task<IActionResult> Update(string username, [FromBody] UpdateRequest req)
        {
            AppUser user = await _userManager.FindByNameAsync(username);

            if (user == null)
                return NotFound(new Response { Error = true, Message = "User not found" });

            if (user.UserName != User?.Identity?.Name)
            {
                return Unauthorized(new Response { Error = true, Message = "You can only modify your own card" });
            }

            //authorized, iterate over links to create/update

            foreach (var reqLink in req.Links)
            {
                if (reqLink.Id == null)
                {
                    // create link
                    var link = new Link
                    {
                        UserId = user.Id,
                        LinkType = reqLink.LinkType,
                        Url = reqLink.Url,
                    };

                    await _linkService.AddLinkAsync(link);
                } else
                {
                    // update link
                    // get existing link, update values, then submit updates to the LinkService
                    var link = await _linkService.GetLinkByIdAsync((int)reqLink.Id);

                    if (link == null) continue;

                    link.LinkType = reqLink.LinkType;
                    link.Url = reqLink.Url;

                    await _linkService.UpdateLinkAsync(link);
                }
            }

            return Ok();
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
