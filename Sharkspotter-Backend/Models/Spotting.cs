namespace Sharkspotter_Backend.Models
{
    public class Spotting
    {
        public int spottingid { get; set; }
        public int userid { get; set; }
        public int beachid { get; set; }
        public DateTime spottingAt { get; set; }
        public Spotting(int spottingid, int userid, int beachid, DateTime spottingAt)
        {
            spottingid = spottingid;
            userid = userid;
            beachid = beachid;
            spottingAt = spottingAt;
        }

        public Spotting(Spotting spotting)
        {
            spottingid = spotting.spottingid;
            userid = spotting.userid;
            beachid = spotting.beachid;
            spottingAt = spotting.spottingAt;
        }

    }

}
