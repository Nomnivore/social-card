using System.ComponentModel.DataAnnotations;

namespace server.Models
{
    public class Link
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string UserId { get; set; }
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
