namespace Sharkspotter_Backend.Models
{
    public class Spotting
    {
        public int spottingid { get; set; }
        public int userid { get; set; }
        public int beachid { get; set; }
        public DateTime spottingAt { get; set; }
        public string comment { get; set; } = "";
        public string sharktype { get; set; } = "";

        public Spotting() { }
        public Spotting(int spottingid, int userid, int beachid, DateTime spottingAt,string comment,string sharktype)
        {
            this.spottingid = spottingid;
            this.userid = userid;
            this.beachid = beachid;
            this.spottingAt = spottingAt;
            this.comment = comment;
            this.sharktype = sharktype;
        }

        public Spotting(Spotting spotting)
        {
            this.spottingid = spotting.spottingid;
            this.userid = spotting.userid;
            this.beachid = spotting.beachid;
            this.spottingAt = spotting.spottingAt;
            this.comment = spotting.comment;
            this.sharktype = spotting.sharktype;
        }

    }

}
