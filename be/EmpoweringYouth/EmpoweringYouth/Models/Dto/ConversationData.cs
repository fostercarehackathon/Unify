using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmpoweringYouth.Models.Dto
{
    public class ConversationData
    {
        public long Id { get; set; }

        public User From { get; set; }

        public User To { get; set; }

        public string Subject { get; set; }

        public long ReplyIn { get; set; }

        public DateTime? LastMessageDate { get; set; }

        public DateTime? StartedDate { get; set; }

        public virtual ICollection<Message> messages { get; set; }

        public List<String>[] Tags { get; set; }

        [JsonConverter(typeof(StringEnumConverter))]
        public Status status { get; set; }
    }
}