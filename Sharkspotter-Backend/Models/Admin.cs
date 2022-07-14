using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sharkspotter_Backend.Models
{
    public class Admin
    {
        public int adminId { get; set; }
        public int userId { get; set; }
        public string adminKey { get; set; }

        Admin() { }

        Admin(int adminId, int userId, string adminKey)
        {
            this.adminId = adminId;
            this.userId = userId;
            this.adminKey = adminKey;
        }

        Admin(Admin admin)
        {
            this.adminId = admin.adminId;
            this.userId = admin.userId;
            this.adminKey = admin.adminKey;
        }

    }
}
