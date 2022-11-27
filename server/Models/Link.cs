using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace server.Models
{
    public class Link
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string UserId { get; set; }
        [JsonIgnore] // prevent reference loops in http response
        public AppUser User { get; set; }

        [Required]
        public string Url { get; set; }

        [Required]
        public LinkTypeEnum LinkType { get; set; }
    }

    public enum LinkTypeEnum
    {
        YouTube,
        GitHub,
        LinkedIn,
        Twitter
    }
}
