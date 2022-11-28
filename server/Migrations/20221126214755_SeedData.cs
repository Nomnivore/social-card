using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace server.Migrations
{
    /// <inheritdoc />
    public partial class SeedData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "LinkType",
                table: "Links",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.InsertData(
                table: "AspNetUsers",
                columns: new[] { "Id", "AccessFailedCount", "ConcurrencyStamp", "Email", "EmailConfirmed", "LockoutEnabled", "LockoutEnd", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "PhoneNumber", "PhoneNumberConfirmed", "SecurityStamp", "TwoFactorEnabled", "UserName" },
                values: new object[,]
                {
                    { "3bda2c93-0918-4e07-be0f-d7c6765b5445", 0, "9fc6cc1f-3f55-4a43-b38d-042ac1f71395", "velma@zmail.com", false, false, null, null, null, "AQAAAAEAACcQAAAAEHkLusmk1bOD0gAGn9yYq42UcdrtcGWTLvERMykdwT8cLxUDQFsaDD6MSFuDqd+Y5w==", null, false, "c2bd6394-6d2b-45d6-806b-56c766f7b508", false, "SarcasticGirl" },
                    { "93d03138-c18b-413a-8001-35e331fe314e", 0, "1bd5654f-46bf-4391-97cf-2dd4641d37f6", "bernard@zmail.com", false, false, null, null, null, "AQAAAAEAACcQAAAAEMllz2iU1KxlaIdg1F6t7to/xVIlHBjV3KHorSMZvD2vKbgV9lTU7oGYyB/dV1vwnA==", null, false, "0f2a9749-603f-4e13-a104-cdfb5bde1acc", false, "Barney" },
                    { "decd8082-310b-4ba6-b62c-fce801382f02", 0, "575f82af-9da1-4168-be49-00accf66a67b", "fred@zmail.com", false, false, null, null, null, "AQAAAAEAACcQAAAAEBCfnxA/Cf1VHQYalq+3aZe1FwclzIpZ70ETfoLf8IOUIJ5X3OWEdgQ8sSEJ98FlIw==", null, false, "39bdd9c7-a70b-4598-83d7-aa3020709bf6", false, "Twinkletoes" }
                });

            migrationBuilder.InsertData(
                table: "Links",
                columns: new[] { "Id", "LinkType", "Url", "UserId" },
                values: new object[,]
                {
                    { 1, 3, "https://twitter.com/velma", "3bda2c93-0918-4e07-be0f-d7c6765b5445" },
                    { 2, 1, "https://github.com/velma", "3bda2c93-0918-4e07-be0f-d7c6765b5445" },
                    { 3, 2, "https://linkedin.com/in/velma-24985423", "3bda2c93-0918-4e07-be0f-d7c6765b5445" },
                    { 4, 3, "https://twitter.com/bernard", "93d03138-c18b-413a-8001-35e331fe314e" },
                    { 5, 1, "https://github.com/bernard", "93d03138-c18b-413a-8001-35e331fe314e" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "decd8082-310b-4ba6-b62c-fce801382f02");

            migrationBuilder.DeleteData(
                table: "Links",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Links",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Links",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Links",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Links",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "3bda2c93-0918-4e07-be0f-d7c6765b5445");

            migrationBuilder.DeleteData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "93d03138-c18b-413a-8001-35e331fe314e");

            migrationBuilder.DropColumn(
                name: "LinkType",
                table: "Links");
        }
    }
}
