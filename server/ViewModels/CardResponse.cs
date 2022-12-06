using server.Models;
using System.Text.Json.Serialization;

namespace server.ViewModels
{
    public class CardResponse
    {
        public string Username = "";

        public List<Link> Links;
    }
}
