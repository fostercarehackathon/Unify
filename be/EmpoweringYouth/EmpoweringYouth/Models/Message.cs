using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmpoweringYouth.Models
{
    public class Message
    {

        private long Id { get; set; }

        private string Body { get; set; }

        private Status Status { get; set; }

        private DateTime Date { get; set; }

    }
}