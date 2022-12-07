using server.Models;

namespace server.ViewModels
{
    public class RequestLink
    {
        public int? Id { get; set; }
        public string Url { get; set; }
        public LinkTypeEnum LinkType { get; set; }
    }
}
