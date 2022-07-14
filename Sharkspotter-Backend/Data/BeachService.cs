﻿using Sharkspotter_Backend.Models;
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

    public List<BeachB> getAllBeaches(){
        var beaches = context.Beaches.ToList();
        var beaches_list = new List<Beach>();
        var final_list = new List<BeachB>();
        beaches.ForEach(u => beaches_list.Add(u));
        foreach(Beach beach in beaches){
            var spotting = context.Spottings.Where(s=>s.beachid == beach.beachid).ToList();
            DateTime date =new DateTime();
            if(spotting.Count()>0){
                date = spotting[spotting.Count()-1].spottingAt;
            }
            BeachB beachb = new BeachB(beach.beachid, beach.latitude, beach.longitude, beach.beach_name, beach.description, date);
            final_list.Add(beachb);
        }
        return final_list;
        }


        public async Task<Beach> getBeach(int id)
        {
            Beach beach = await context.Beaches.FindAsync  (id);
            return beach;
        }

        public async void createBeach(Beach beach)
        {
            context.Beaches.Add(beach);
            await context.SaveChangesAsync();
          
        }   

    }
}
