using EmpoweringYouth.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EmpoweringYouth.Controllers
{
    [RoutePrefix("api/messages")]
    public class MessagesController : ApiController
    {

        [HttpGet]
        [Route("health")]
        public IHttpActionResult Health()
        {
            IDictionary<String, String> status = new Dictionary<String, String>();
            status.Add("running","up");
            return Ok(status);
        }

        [HttpPost]
        public IHttpActionResult AddNewMessage(Message message)
        {
            if (message.Id != null)
            {
                // create new message and add it to conversation

            }

            return Ok(message);
        }
    }
}
