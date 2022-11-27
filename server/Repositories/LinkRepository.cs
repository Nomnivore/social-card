using Microsoft.EntityFrameworkCore;
using server.DbContext;
using server.Models;

namespace server.Repositories
{
    public class LinkRepository : Repository<Link>, ILinkRepository
    {
        public LinkRepository(ApplicationDbContext applicationDbContext) : base(applicationDbContext)
        {
        }

        public async Task<Link?> GetLinkByIdAsync(int id)
        {
            return await ApplicationDbContext.Links.SingleOrDefaultAsync(x => x.Id == id);
        }

        public IQueryable<Link> GetLinksByUserId(string userId)
        {
            if (userId == null) throw new ArgumentNullException("userId");

            try
            {
                return ApplicationDbContext.Links.Where(x => x.UserId == userId);

            }
            catch (Exception e)
            {
                throw new Exception($"Could not retrieve links for user {userId}: {e.Message}");
            }
        }
    }
}
