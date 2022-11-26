using server.DbContext;
using server.Models;

namespace server.Repositories
{
    public class LinkRepository : Repository<Link>, ILinkRepository
    {
        public LinkRepository(ApplicationDbContext applicationDbContext) : base(applicationDbContext)
        {
        }

        public Task<List<Link>> GetLinksByUserAsync(AppUser user)
        {
            if (user == null) throw new ArgumentNullException("user");

            throw new NotImplementedException();
        }
    }
}
