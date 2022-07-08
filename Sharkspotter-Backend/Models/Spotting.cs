namespace Sharkspotter_Backend.Models
{
    public class Spotting
    {
        public int id { get; set; }
        public int user_id { get; set; }
        public int beach_id { get; set; }
        public DateTime created_at { get; set; }
        //Constructor with no prameters
        public Spotting() { }
        //Constructor with parameters 
        public Spotting(int spotting_id, int user_id, int beach_id, DateTime timestamp)
        {
            id = spotting_id;
            user_id = user_id;
            beach_id = beach_id;
            created_at = timestamp;
        }

        public Spotting(Spotting spotting)
        {
            id = spotting.id;
            user_id = spotting.user_id;
            beach_id = spotting.beach_id;
            created_at = spotting.created_at;
        }

    }

}
