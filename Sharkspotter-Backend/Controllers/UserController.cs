using Microsoft.AspNetCore.Mvc;
using Sharkspotter_Backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Authorization;

namespace Sharkspotter_Backend.Data
{
    [Route("api/User")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserService uService;
        public UserController(UserService service){
            this.uService = service;
        }
        [HttpPost("create")]
        public IActionResult createUser(User user)
        {
            var result = uService.CreateUser(user);
            return StatusCode(201, user);
        }

        [HttpGet("getAll")]
        [Authorize("read:users")]
        public List<User> getAllUsers()
        {
            return uService.getAllUsers();
        }
    }
}
