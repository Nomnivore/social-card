namespace server.ViewModels
{
    public class LoginResponse : Response
    {
        public string Token { get; set; }
        public DateTime Expiration { get; set; }
        public string Username { get; set; }
    }
}
