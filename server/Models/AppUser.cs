using Microsoft.AspNetCore.Identity;

namespace server.Models
{
    public class AppUser : IdentityUser
    {
        // id, username, password, and email are already
        // implemented by IdentityUser
        // https://learn.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.identity.identityuser?view=aspnetcore-6.0

        public List<Link> Links { get; set; }
    }
}
