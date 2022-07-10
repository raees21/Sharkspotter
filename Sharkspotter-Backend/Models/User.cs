namespace Sharkspotter_Backend.Models
{
    public class User
    {
        public int userid { get; set; }
        public string user_name { get; set; }

        public User() { }

        public User(int userid, string user_name)
        {
            userid = userid;
            user_name = user_name;

        }

        public User(User user)
        {
            userid = user.userid;
            user_name = user.user_name;
        }


    }
}