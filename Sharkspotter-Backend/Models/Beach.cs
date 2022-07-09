namespace Sharkspotter_Backend.Models
{
    public class Beach
    {
        public Guid id { get; set; }
        public double latitude { get; set; }
        public double longitude { get; set; }
        public string beach_name { get; set; }
        public DateTime created_at { get; set; }
        public Beach() { }
        public Beach(Guid beach_id, double latittude, double longitude, string beach_name, DateTime timestamp)
        {
            this.id = beach_id;
            this.latitude = latittude;
            this.longitude = longitude;
            this.beach_name = beach_name;
            this.created_at = timestamp;

        }

        public Beach(Beach beach)
        {
            id = beach.id;
            longitude = beach.longitude;
            beach_name = beach.beach_name;
            latitude = beach.latitude;
            created_at = beach.created_at;
        }

    }

}
