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

        [HttpPost]
        public IHttpActionResult AddNewMessage(Message message)
        {
            return Ok(message);
        }
    }
}
