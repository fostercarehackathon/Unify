using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace EmpoweringYouth.Models
{
    public class Message
    {
        [Key]
        public long Id { get; set; }

        public string Body { get; set; }

        public Status Status { get; set; }

        public DateTime? Date { get; set; }

        public User From { get; set; }

        public User To { get; set; }

        public ReplyType ReplyType { get; set; }

        public int ReplyIn { get; set; }

        public DateTime? ReplyDate { get; set; }
    }
}