using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmpoweringYouth.Models
{
    public class Conversation
    {
        public long Id { get; set; }

        public string From { get; set; }

        public string Subject { get; set; }

        public long ReplyIn { get; set; }

        public DateTime Date { get; set; }

        public List<Message> messages { get; set; }

        public List<String>[] Tags { get; set; }
    }
}