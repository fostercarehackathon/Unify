using EmpoweringYouth.Models;
using EmpoweringYouth.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace EmpoweringYouth.Controllers
{
    public class ControllerUtils : ApiController
    {
        public static User GetUserFromRequest(HttpRequestMessage request)
        {

            IEnumerable<string> requestHeaders;
            var authHeader = string.Empty;

            if (request.Headers.TryGetValues("Authorization", out requestHeaders))
            {
                authHeader = requestHeaders.FirstOrDefault();
                User user = AuthService.GetFromCache(authHeader);
                return user;
            }
            return null;


        }
    }
}