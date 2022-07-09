using Sharkspotter_Backend.Models;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace Sharkspotter_Backend.Data
{
    public class BeachService
    {
        private DataContext context;
        public BeachService(DataContext context)
        {
            this.context = context;
        }
        public int CreateBeach(Beach beach)
        {
            context.Beaches.Add(beach);
            context.SaveChanges();
            return 1;
        }
        public IEnumerable<Beach> getAllBeaches()
        {
            var beaches = context.Beaches.ToList();
            var beaches_list = new List<Beach>();
            beaches.ForEach(u => beaches_list.Add(u));
            return beaches_list;
        }

        public async Task<Beach> getBeach(Guid id)
        {
            Beach beach = await context.Beaches.FindAsync(id);

            return beach;
        }

        public async void createBeach(Beach beach)
        {
            context.Beaches.Add(beach);
            await context.SaveChangesAsync();
          
        }

        public async Task<int> DeleteBeach(Guid beachId)
        {
    
            Beach beach = await context.Beaches.FirstOrDefaultAsync(beach => beach.id == beachId);

            if (beach is null)
            {
                return 404;
            }

            context.Beaches.Remove(beach);

            await context.SaveChangesAsync();

            return 200;

    
        }




    }
}
