using Sharkspotter_Backend.Models;

namespace Sharkspotter_Backend.Data
{
    public class UserService 
    {
        private DataContext context;
        public UserService(DataContext context)
        {
            this.context = context;
        }
        public int CreateUser(User user)
        {
            context.Users.Add(user);
            context.SaveChanges();
            return 1;
        }
        public List<User> getAllUsers()
        {
            var users = context.Users.ToList();
            var users_list = new List<User>();
            users.ForEach(u => users_list.Add(u));
            return users_list;
        }
    }
}
