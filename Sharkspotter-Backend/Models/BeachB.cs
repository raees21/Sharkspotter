using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sharkspotter_Backend.Models
{
  public class BeachB
  {
    public int beachid { get; set; }
    public decimal latitude { get; set; }
    public decimal longitude { get; set; }
    public string beach_name { get; set; } = "";
    public string description { get; set; } = "";
    public DateTime spottingAt { get; set; }

    public BeachB() { }
    public BeachB(int beachid, decimal latitude, decimal longitude, string beach_name, string description, DateTime spottingAt)
    {
      this.beachid = beachid;
      this.latitude = latitude;
      this.longitude = longitude;
      this.beach_name = beach_name;
      this.description = description;
      this.spottingAt = spottingAt;

    }

    public BeachB(BeachB beach)
    {
      this.beachid = beach.beachid;
      this.longitude = beach.longitude;
      this.beach_name = beach.beach_name;
      this.latitude = beach.latitude;
      this.description = beach.description;
      this.spottingAt = beach.spottingAt;
    }

  }
}
