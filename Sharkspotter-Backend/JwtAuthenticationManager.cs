﻿using Microsoft.IdentityModel.Tokens;
using Sharkspotter_Backend.Data;
using Sharkspotter_Backend.Models;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Sharkspotter_Backend
{
    public class JwtAuthenticationManager
    {
        private readonly string key;
        public JwtAuthenticationManager(string key)
        {
            this.key = key;
        }

        public string Authenticate(string adminkey, List<Admin>admins)
        {
            if (!admins.Any(a => a.adminKey == adminkey))
            {
                return null;
            }
            JwtSecurityTokenHandler tokenHandler = new
            ();
            var tokenKey = Encoding.ASCII.GetBytes(key);

            SecurityTokenDescriptor tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
              {
          new Claim(ClaimTypes.Name, adminkey)
              }),

                Expires = DateTime.UtcNow.AddHours(1),
                SigningCredentials = new SigningCredentials(
                new SymmetricSecurityKey(tokenKey),
                SecurityAlgorithms.HmacSha256Signature)

            };
            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }

    }
}
