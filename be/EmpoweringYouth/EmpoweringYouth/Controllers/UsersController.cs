using EmpoweringYouth.Context;
using EmpoweringYouth.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EmpoweringYouth.Controllers
{
    [RoutePrefix("api")]
    public class UsersController : ApiController
    {
        [HttpGet]
        [Route("users")]
        public IHttpActionResult GetUsersByRole([FromUri] Role role = Role.CW)
        {
            User requestUser = ControllerUtils.GetUserFromRequest(Request);
            if (requestUser == null)
            {
                return BadRequest();
            }

            using (var ctx = new EmpoweringYouthContext())
            {
                return Ok(ctx.users.Where(u => u.Role == role).OrderBy(u => u.Username).ToList());
            }
        }
    }
}
