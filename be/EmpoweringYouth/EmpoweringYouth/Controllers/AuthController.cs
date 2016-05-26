using EmpoweringYouth.Models;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Web.Http;

namespace EmpoweringYouth.Controllers
{
    [RoutePrefix("api/auth")]
    public class AuthController : ApiController
    {

        byte[] securityKey = System.Text.Encoding.UTF8.GetBytes("changeMeWhenInProduction!");

        JwtSecurityTokenHandler tokenHandler = new System.IdentityModel.Tokens.JwtSecurityTokenHandler();

        [HttpPost]
        [Route("signup")]
        public IDictionary<String, String> Signup(User user)
        {
            var token = GenerateToken(user);
            var response = new Dictionary<String, String>();
            response.Add("token", token);
            return response;

        }

        private String GenerateToken(User user)
        {
            var now = DateTime.Now;
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name,user.Firstname+" "+user.Lastname),
                    new Claim(ClaimTypes.Role,user.Role.Name),
                }),
                TokenIssuerName = "CaseWorkerMessaging"
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}



