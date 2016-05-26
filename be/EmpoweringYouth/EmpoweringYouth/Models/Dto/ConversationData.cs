using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmpoweringYouth.Models.Dto
{
    public class ConversationData
    {
        public User From { get; set; }

        public User To { get; set; }

        public string Subject { get; set; }

        public long ReplyIn { get; set; }

        public DateTime LastMessageDate { get; set; }

        public DateTime StartedDate { get; set; }

        public virtual List<Message> messages { get; set; }

        public List<String>[] Tags { get; set; }
    }
}