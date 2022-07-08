using Microsoft.EntityFrameworkCore;
using Sharkspotter_Backend.Models;

namespace Sharkspotter_Backend.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Spotting> Spottings { get; set; }
        public DbSet<Beach> Beaches { get; set; }

    }
}
