using Microsoft.AspNetCore.Mvc;
using Sharkspotter_Backend.Models;
using Microsoft.AspNetCore.Http;

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
            
            if(result == 1)
            {
                return Ok("User was successfully created");
            }
            else
            {
                return Ok("Error : Failed to create user");
            }
        }

        [HttpGet("getAll")]
        public List<User> getAllUsers()
        {
            return uService.getAllUsers();
        }
    }
}
