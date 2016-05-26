using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmpoweringYouth.Models
{
    public class Message
    {

        public long Id { get; set; }

        public string Body { get; set; }

        public Status Status { get; set; }

        public DateTime Date { get; set; }

        public virtual Conversation Conversation { get; set; }
    }
}