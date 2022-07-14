using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Sharkspotter_Backend.Data;
using Sharkspotter_Backend.Models;

namespace Sharkspotter_Backend.Controllers
{
    [Route("[controller]")]
    public class AuthorizationController : ControllerBase
    {
        public readonly JwtAuthenticationManager jwtAuthenticationManager = new JwtAuthenticationManager("sharkspotterAuth12345%%%%%$$$");
        private readonly AdminService adminService;
        public AuthorizationController(AdminService service)
        {
            this.adminService = service;
        }

        [AllowAnonymous]
        [HttpGet]
        [Route("Token/{key}")]
        public Dictionary<string, int> AuthUser(String key)
        {
            var map = new Dictionary<string, int>(); 
            List<Admin> admins = adminService.getAdmin();
            var token = jwtAuthenticationManager.Authenticate(key,admins);
            map.Add(token,3600000);
            return map;
        }
    }
}