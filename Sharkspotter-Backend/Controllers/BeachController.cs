using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Sharkspotter_Backend.Models;
using Microsoft.AspNetCore.Http;
using System.Net;

namespace Sharkspotter_Backend.Data
{
    [ApiController]
    [Route("api/v1/beaches")]
    [Produces("application/json")]
    public class BeachController : ControllerBase
    {

        private readonly BeachService beachService;
        public BeachController(BeachService service)
        {
            this.beachService = service;
        }

        /// <summary>
        /// Get all beaches
        /// </summary>
        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<Beach>), 200)]
        public async Task<ActionResult<IEnumerable<Beach>>> GetBeaches()
        {
            IEnumerable<Beach> beaches =  beachService.getAllBeaches();
            
            return StatusCode(200, beaches);
        }

        /// <summary>
        /// Get a single beach
        /// </summary>
        [HttpGet("{beachId}")]
        [ProducesResponseType(typeof(Beach), 200)]

        public async Task<ActionResult<Beach>> GetBeach(int beachId)
        {
            var beach = await beachService.getBeach(beachId);
            
            if (beach == null)
            {
                return NotFound();
            }
            return StatusCode(200, beach);
        }

        /// <summary>
        /// Create a new beach
        /// </summary>
        [HttpPost]
        [ProducesResponseType(typeof(Beach), 201)]
        public ActionResult<Beach> CreateBeach(Beach beach)
        {
            beachService.CreateBeach(beach);

            return StatusCode(201, beach);
        }

        /// <summary>
        /// Remove a beach
        /// </summary>
        [HttpDelete("{beachId}")]

        public async Task<ActionResult> DeleteBeach(int beachId) 
        {
            int code = await beachService.DeleteBeach(beachId);
 
            return StatusCode(code);
        }

      
    }
}