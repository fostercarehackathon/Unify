using EmpoweringYouth.Context;
using EmpoweringYouth.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IdentityModel.Tokens;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Web.Http;

namespace EmpoweringYouth.Controllers
{
    [RoutePrefix("api/auth")]
    public class AuthController : ApiController
    {

        byte[] securityKey = System.Text.Encoding.UTF8.GetBytes("changeMeWhenInProduction!");

        JwtSecurityTokenHandler tokenHandler = new System.IdentityModel.Tokens.JwtSecurityTokenHandler();

        [HttpPost]
        [Route("signin")]
        public IHttpActionResult SignIn([Required]LoginData loginData)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();

            }

            using (var ctx = new EmpoweringYouthContext())
            {
                var passwordHash = GeneratePasswordHash(loginData.password);
                var users = ctx.users.Where(u => u.Username == loginData.username && u.Password == passwordHash);
                User user = users.Count() == 1 ? users.First() : null;
                if (user == null)
                {
                    return NotFound();
                }
                var token = GenerateToken(user);
                var response = new Dictionary<String, String>();
                response.Add("token", token);
                return Ok(response);
            }

        }

        [HttpPost]
        [Route("signup")]
        public IHttpActionResult SignUp(User user)
        {
            using (var ctx = new EmpoweringYouthContext())
            {
                user.Role = Role.CW;
                user.Password = GeneratePasswordHash(user.Password);
                ctx.users.Add(user);
                ctx.SaveChanges();
                return Ok();
            }
        }

        public static String GeneratePasswordHash(String password)
        {
            var sha1 = new SHA1CryptoServiceProvider();
            var sha1data = sha1.ComputeHash(System.Text.Encoding.UTF8.GetBytes((password)));
            return System.Text.Encoding.Default.GetString(sha1data);
        }

        private String GenerateToken(User user)
        {
            var now = DateTime.Now;
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name,user.Firstname+" "+user.Lastname),
                    new Claim(ClaimTypes.Role,user.Role.ToString()),
                }),
                TokenIssuerName = "CaseWorkerMessaging"
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}



