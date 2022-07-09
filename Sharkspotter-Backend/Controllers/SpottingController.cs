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
        public async Task<ActionResult<IEnumerable<Spotting>>> GetProducts()
        {
            IEnumerable<Spotting> products = spottingService.getAllSpottings();

            return StatusCode(200, products);
        }

        /// <summary>
        /// Get a single product
        /// </summary>
        [HttpGet("{spottingId}")]
        [ProducesResponseType(typeof(Spotting), 200)]

        public async Task<ActionResult<Spotting>> GetSpotting(Guid spottingId)
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
        [Authorize(Roles = "Administrator")]
        [ProducesResponseType(typeof(Spotting), 201)]
        public async Task<ActionResult<Spotting>> CreateSpotting(Spotting spotting)
        {
            // Guid userId =  OAuth2.UserGuid(_httpContextAccessor);
            spottingService.CreateSpotting(spotting);

            return StatusCode(201, spotting);
        }

        /// <summary>
        /// Remove a spotting
        /// </summary>
        [HttpDelete("{productId}")]
        [Authorize(Roles = "Administrator")]
        public async Task<ActionResult> DeleteSpotting(Guid spottingId)
        {
            int code = await spottingService.DeleteSpotting(spottingId);

            return StatusCode(code);
        }


    }
}