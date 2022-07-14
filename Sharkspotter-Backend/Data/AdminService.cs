using Sharkspotter_Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sharkspotter_Backend.Data
{
    public class AdminService
    {
        private DataContext context;
        public AdminService(DataContext context)
        {
            this.context = context;
        }
        public List<Admin> getAdmin()
        {
            var admins = context.Admin.ToList();
            var admins_list = new List<Admin>();
            admins.ForEach(a => admins_list.Add(a));
            return admins_list;
        }
    }
}
