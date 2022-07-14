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
        private readonly AdminService aService;
        public UserController(UserService service, AdminService service2){
            this.uService = service;
            this.aService = service2;
        }
        [Authorize]
        [HttpPost("create")]
        public IActionResult createUser(User user)
        {
            var result = uService.CreateUser(user);
            return StatusCode(201, user);
        }

        [HttpGet("getAll")]
        //[Authorize("read:users")]
        [Authorize]
        public List<User> getAllUsers()
        {
            return uService.getAllUsers();
        }
    }
}
