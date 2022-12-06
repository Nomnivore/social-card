namespace server.ViewModels
{
    public class LoginResponse
    {
        public string Token { get; set; }
        public DateTime Expiration { get; set; }
        public string Username { get; set; }

        public string Message { get; set; }
    }
}
