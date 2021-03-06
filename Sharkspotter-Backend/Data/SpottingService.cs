using Sharkspotter_Backend.Models;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace Sharkspotter_Backend.Data
{
    public class SpottingService
    {
        private DataContext context;
        public SpottingService(DataContext context)
        {
            this.context = context;
        }
        public int CreateSpotting(Spotting spotting)
        {
            context.Spottings.Add(spotting);
            context.SaveChanges();
            return 1;
        }
        public IEnumerable<Spotting> getAllSpottings()
        {
            var spottinges = context.Spottings.ToList();
            var spottinges_list = new List<Spotting>();
            spottinges.ForEach(u => spottinges_list.Add(u));
            return spottinges_list;
        }

        public async Task<Spotting> getSpotting(int id)
        {
            Spotting spotting = await context.Spottings.FindAsync(id);

            return spotting;
        }

        public async void createSpotting(Spotting spotting)
        {
            context.Spottings.Add(spotting);
            await context.SaveChangesAsync();

        }

        public List<Spotting> getSpottingsByBeachId(int beachId)
        {
            var spottings = context.Spottings.Where(s => s.beachid == beachId).ToList();
            return spottings;
        }
    }
}
