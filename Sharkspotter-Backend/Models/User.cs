namespace Sharkspotter_Backend.Models
{
    public class User
    {
        public int id { get; set; }
        public string user_name { get; set; }
        public DateTime created_at { get; set; }
        public User() { }

        public User(int user_id, string username, DateTime timestamp)
        {
            id = user_id;
            user_name = username;
            created_at = timestamp;

        }

        public User(User user)
        {
            id = user.id;
            user_name = user.user_name;
            created_at = user.created_at;
        }


    }
}