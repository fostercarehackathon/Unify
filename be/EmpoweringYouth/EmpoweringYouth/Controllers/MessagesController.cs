using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EmpoweringYouth.Controllers
{
    public class MessagesController : ApiController
    {

        [HttpGet]
        [Route("api/messages/health")]
        public IHttpActionResult Health()
        {
            IDictionary<String, String> status = new Dictionary<String, String>();
            status.Add("running","up");
            return Ok(status);
        }
    }
}
