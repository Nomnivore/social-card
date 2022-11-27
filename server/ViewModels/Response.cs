using System.Text.Json.Serialization;

namespace server.ViewModels
{
    public class Response
    {
        public bool Error { get; set; } = false;

        public string Message { get; set; } = "";
    }
}
