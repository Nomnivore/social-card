using server.Models;

namespace server.Repositories
{
    public interface ILinkRepository : IRepository<Link>
    {
        IQueryable<Link> GetLinksByUserId(string userId);

        Task<Link?> GetLinkByIdAsync(int id);
    }
}
