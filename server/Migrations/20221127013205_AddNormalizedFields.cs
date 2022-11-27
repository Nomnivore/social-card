using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace server.Migrations
{
    /// <inheritdoc />
    public partial class AddNormalizedFields : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "3bda2c93-0918-4e07-be0f-d7c6765b5445",
                columns: new[] { "ConcurrencyStamp", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "SecurityStamp" },
                values: new object[] { "f67064db-8f85-4982-ae62-2a2483c6c270", "VELMA@ZMAIL.COM", "SARCASTICGIRL", "AQAAAAEAACcQAAAAEEZ29NnVmgC0aWjXhFMNRXLCpoSAjBqSIbYy1iiX4xxg8Z4LOgWG3GJ+X2SatijtgQ==", "8ee7476d-975f-4f9f-aa9f-c1db7be3133f" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "93d03138-c18b-413a-8001-35e331fe314e",
                columns: new[] { "ConcurrencyStamp", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "SecurityStamp" },
                values: new object[] { "b9cabc30-9877-46b6-8ba0-ca897573eaa9", "BERNARD@ZMAIL.COM", "BARNEY", "AQAAAAEAACcQAAAAEL2TJqeA7RxRtO5UbDY4g/DjCN+/7AwVuLOhByPtvjS80rd7fMYLE96VbGhxcm5QRg==", "3844183b-8718-4589-a0cf-08a2d2a2e7bb" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "decd8082-310b-4ba6-b62c-fce801382f02",
                columns: new[] { "ConcurrencyStamp", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "SecurityStamp" },
                values: new object[] { "ed45b643-5ecf-45a2-8f91-ad975bb7444d", "FRED@ZMAIL.COM", "TWINKLETOES", "AQAAAAEAACcQAAAAEEodb4rKmpqKM7ITwTTihwRmahpdPn/B94wXj11ilyroJJre5kq5Ep7QSbq9RPtetA==", "e87fa40b-7142-4291-9611-c7d7acc67424" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "3bda2c93-0918-4e07-be0f-d7c6765b5445",
                columns: new[] { "ConcurrencyStamp", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "SecurityStamp" },
                values: new object[] { "9fc6cc1f-3f55-4a43-b38d-042ac1f71395", null, null, "AQAAAAEAACcQAAAAEHkLusmk1bOD0gAGn9yYq42UcdrtcGWTLvERMykdwT8cLxUDQFsaDD6MSFuDqd+Y5w==", "c2bd6394-6d2b-45d6-806b-56c766f7b508" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "93d03138-c18b-413a-8001-35e331fe314e",
                columns: new[] { "ConcurrencyStamp", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "SecurityStamp" },
                values: new object[] { "1bd5654f-46bf-4391-97cf-2dd4641d37f6", null, null, "AQAAAAEAACcQAAAAEMllz2iU1KxlaIdg1F6t7to/xVIlHBjV3KHorSMZvD2vKbgV9lTU7oGYyB/dV1vwnA==", "0f2a9749-603f-4e13-a104-cdfb5bde1acc" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "decd8082-310b-4ba6-b62c-fce801382f02",
                columns: new[] { "ConcurrencyStamp", "NormalizedEmail", "NormalizedUserName", "PasswordHash", "SecurityStamp" },
                values: new object[] { "575f82af-9da1-4168-be49-00accf66a67b", null, null, "AQAAAAEAACcQAAAAEBCfnxA/Cf1VHQYalq+3aZe1FwclzIpZ70ETfoLf8IOUIJ5X3OWEdgQ8sSEJ98FlIw==", "39bdd9c7-a70b-4598-83d7-aa3020709bf6" });
        }
    }
}
