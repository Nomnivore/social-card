using server.Models;

namespace server.Repositories
{
    public interface ILinkRepository : IRepository<Link>
    {
        Task<List<Link>> GetLinksByUserAsync(AppUser user);
    }
}
