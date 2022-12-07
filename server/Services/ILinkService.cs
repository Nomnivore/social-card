using server.Models;

namespace server.Services
{
    public interface ILinkService
    {
        Task<Link> AddLinkAsync(Link link);

        Task<Link?> GetLinkByIdAsync(int id);

        List<Link> GetLinksByUserId(string userId);

        Task DeleteLinksById(List<int> ids);

        Task<Link> UpdateLinkAsync(Link link);
    }
}
