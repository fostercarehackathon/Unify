using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmpoweringYouth.Models
{
    public class Conversation
    {
        private long Id { get; set; }

        private string From { get; set; }

        private string Subject { get; set; }

        private long ReplyIn { get; set; }

        private DateTime Date { get; set; }

        private List<String>[] Tags { get; set; }
    }
}