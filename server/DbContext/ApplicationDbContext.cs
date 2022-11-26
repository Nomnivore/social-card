using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using server.Models;

namespace server.DbContext
{
    public class ApplicationDbContext : IdentityDbContext<AppUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Link> Links { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            SeedUsers(builder);
            SeedLinks(builder);
        }

        private void SeedUsers(ModelBuilder builder)
        {
            // create users
            var users = new List<AppUser>
            {
                new AppUser
                {
                    Id = "3bda2c93-0918-4e07-be0f-d7c6765b5445",
                    Email = "velma@zmail.com",
                    UserName = "SarcasticGirl"
                },
                new AppUser
                {
                    Id = "93d03138-c18b-413a-8001-35e331fe314e",
                    Email = "bernard@zmail.com",
                    UserName = "Barney"
                },
                new AppUser
                {
                    Id = "decd8082-310b-4ba6-b62c-fce801382f02",
                    Email = "fred@zmail.com",
                    UserName = "Twinkletoes"
                }
            };

            PasswordHasher<AppUser> ph = new PasswordHasher<AppUser>();
            users.ForEach(user =>
            {
                user.PasswordHash = ph.HashPassword(user, "Password1!");
            });

            builder.Entity<AppUser>().HasData(users);
        }

        private void SeedLinks(ModelBuilder builder)
        {
            builder.Entity<Link>().HasData(
                new Link
                {
                    Id = 1,
                    UserId = "3bda2c93-0918-4e07-be0f-d7c6765b5445",
                    LinkType = LinkTypeEnum.Twitter,
                    Url = "https://twitter.com/velma"
                },
                new Link
                {
                    Id = 2,
                    UserId = "3bda2c93-0918-4e07-be0f-d7c6765b5445",
                    LinkType = LinkTypeEnum.GitHub,
                    Url = "https://github.com/velma"
                },
                new Link
                {
                    Id = 3,
                    UserId = "3bda2c93-0918-4e07-be0f-d7c6765b5445",
                    LinkType = LinkTypeEnum.LinkedIn,
                    Url = "https://linkedin.com/in/velma-24985423"
                },
                new Link
                {
                    Id = 4,
                    UserId = "93d03138-c18b-413a-8001-35e331fe314e",
                    LinkType = LinkTypeEnum.Twitter,
                    Url = "https://twitter.com/bernard"
                },
                new Link
                {
                    Id = 5,
                    UserId = "93d03138-c18b-413a-8001-35e331fe314e",
                    LinkType = LinkTypeEnum.GitHub,
                    Url = "https://github.com/bernard"
                }
                );
        }
    }
}
