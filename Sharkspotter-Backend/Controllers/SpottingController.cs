using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Sharkspotter_Backend.Models;
using Microsoft.AspNetCore.Http;
using System.Net;
using Sharkspotter_Backend.Data;

namespace Sharkspotter_Backend.Controller
{
    [ApiController]
    [Route("api/v1/spottings")]
    [Produces("application/json")]
    public class SpottingController : ControllerBase
    {

        private SpottingService spottingService;
        public SpottingController(SpottingService service)
        {
            this.spottingService = service;
        }

        /// <summary>
        /// Get all spottings
        /// </summary>
        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<Spotting>), 200)]
        public async Task<ActionResult<IEnumerable<Spotting>>> GetSpottings()
        {
            IEnumerable<Spotting> spottings = spottingService.getAllSpottings();

            return StatusCode(200, spottings);
        }

        /// <summary>
        /// Get a single product
        /// </summary>
        [HttpGet("{spottingId}")]
        
        [ProducesResponseType(typeof(Spotting), 200)]

        public async Task<ActionResult<Spotting>> GetSpotting(int spottingId)
        {
            var spotting = await spottingService.getSpotting(spottingId);

            if (spotting == null)
            {
                return NotFound();
            }
            return StatusCode(200, spotting);
        }

        /// <summary>
        /// Create a new spotting
        /// </summary>
        [HttpPost]
        //[Authorize("update:spottings")]
        [ProducesResponseType(typeof(Spotting), 201)]
        public async Task<ActionResult<Spotting>> CreateSpotting(Spotting spotting)
        {

            spottingService.CreateSpotting(spotting);

            return StatusCode(201, spotting);
        }

        [HttpGet("spottingsByBeach{beachId}")]
        [Authorize("read:spottings_by_beach_id")]
        public List<Spotting> getSpottingsByBeachId(int beachId)
        {
            return spottingService.getSpottingsByBeachId(beachId);
        }
    }
}