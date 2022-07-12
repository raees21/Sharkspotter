namespace Sharkspotter_Backend.Models
{
    public class User
    {
        public int userid { get; set; }
        public string user_name { get; set; } = "";

        public User() { }

        public User(int userid, string user_name)
        {
            this.userid = userid;
            this.user_name = user_name;

        }

        public User(User user)
        {
            this.userid = user.userid;
            this.user_name = user.user_name;
        }


    }
}