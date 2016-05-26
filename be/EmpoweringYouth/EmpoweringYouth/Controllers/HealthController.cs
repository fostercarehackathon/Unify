using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EmpoweringYouth.Controllers
{
    [RoutePrefix("api")]
    public class HealthController : ApiController
    {
        [Route("health")]
        public IDictionary<String, String> GetStatus()
        {
            IDictionary<String, String> status = new Dictionary<String, String>();
            status.Add("status", "up");
            return status;
        }
    }
}

