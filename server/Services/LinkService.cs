using server.Models;
using server.Repositories;

namespace server.Services
{
    public class LinkService : ILinkService
    {
        private readonly ILinkRepository _linkRepository;

        public LinkService(ILinkRepository linkRepository)
        {
            _linkRepository = linkRepository;
        }

        public Task<Link> AddLinkAsync(Link link)
        {
            throw new NotImplementedException();
        }

        public async Task<Link?> GetLinkByIdAsync(int id)
        {
            var link = await _linkRepository.GetLinkByIdAsync(id);

            return link;
        }

        public List<Link> GetLinksByUserId(string userId)
        {
            var links = _linkRepository.GetLinksByUserId(userId).ToList();

            return links;
        }

        public async Task DeleteLinksById(List<int> ids)
        {
            foreach (var linkId in ids)
            {
                var link = await GetLinkByIdAsync(linkId);
                if (link != null)
                    await _linkRepository.RemoveAsync(link);
            }
        }
    }
}
