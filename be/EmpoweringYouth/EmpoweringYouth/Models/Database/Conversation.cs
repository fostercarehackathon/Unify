using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace EmpoweringYouth.Models
{
    public class Conversation
    {
        public Conversation()
        {
            Messages = new List<Message>();
        }

        [Key]
        public long Id { get; set; }

        public User From { get; set; }

        public User To { get; set; }

        public string Subject { get; set; }

        public long ReplyIn { get; set; }

        public ReplyType ReplyType { get; set; }

        public DateTime? ReplyDate { get; set; }

        public DateTime? LastMessageDate { get; set; }

        public DateTime StartedDate { get; set; }

        public List<Message> messages { get; set; }

        public virtual ICollection<Message> Messages { get; set; }

        public List<String>[] Tags { get; set; }
    }
}