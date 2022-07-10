namespace Sharkspotter_Backend.Models
{
    public class Beach
    {
        public int beachid { get; set; }
        public decimal latitude { get; set; }
        public decimal longitude { get; set; }
        public string beach_name { get; set; }

        public Beach() { }
        public Beach(int beachid, decimal latitude, decimal longitude, string beach_name)
        {
            this.beachid = beachid;
            this.latitude = latitude;
            this.longitude = longitude;
            this.beach_name = beach_name;

        }

        public Beach(Beach beach)
        {
            beachid = beach.beachid;
            longitude = beach.longitude;
            beach_name = beach.beach_name;
            latitude = beach.latitude;
        }

    }

}
