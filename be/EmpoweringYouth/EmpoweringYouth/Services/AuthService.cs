using EmpoweringYouth.Models;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Web;

namespace EmpoweringYouth.Services
{
    public class AuthService
    {
        byte[] securityKey = System.Text.Encoding.UTF8.GetBytes("changeMeWhenInProduction!");

        private static JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();

        public static IDictionary<String, User> userCache = new Dictionary<String, User>();

        public static String GeneratePasswordHash(String password)
        {
            var sha1 = new SHA1CryptoServiceProvider();
            var sha1data = sha1.ComputeHash(System.Text.Encoding.UTF8.GetBytes((password)));
            return System.Text.Encoding.Default.GetString(sha1data);
        }

        public static String GenerateToken(User user)
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

        public static User GetFromCache(String token)
        {
            User user = null;
            if (userCache.TryGetValue(token, out user))
            {
                return user;
            }
            return null;
        }
    }
}