namespace Sharkspotter_Backend.Models
{
    public class Beach
    {
        public int beachid { get; set; }
        public decimal latitude { get; set; }
        public decimal longitude { get; set; }
        public string beach_name { get; set; } = "";
        public string description { get; set; } = "";

        public Beach() { }
        public Beach(int beachid, decimal latitude, decimal longitude, string beach_name, string description)
        {
            this.beachid = beachid;
            this.latitude = latitude;
            this.longitude = longitude;
            this.beach_name = beach_name;
            this.description = description;

        }

        public Beach(Beach beach)
        {
            this.beachid = beach.beachid;
            this.longitude = beach.longitude;
            this.beach_name = beach.beach_name;
            this.latitude = beach.latitude;
            this.description = beach.description;
        }

    }

}
