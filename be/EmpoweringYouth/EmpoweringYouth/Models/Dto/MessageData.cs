using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmpoweringYouth.Models.Dto
{
    public class MessageData
    {
        public string Body { get; set; }

        public long? ConversationId { get; set; }

        public ReplyType ReplyType { get; set; }

        public int ReplyIn { get; set; }

        public string To { get; set; }

        public string Subject { get; set; }
    }
}