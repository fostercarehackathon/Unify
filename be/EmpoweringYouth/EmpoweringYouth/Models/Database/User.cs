using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace EmpoweringYouth.Models
{
    public class User
    {

        [Key]
        public long Id { get; set; }

        public String Username { get; set; }

        public String Firstname { get; set; }

        public String Lastname { get; set; }

        [JsonIgnore]
        public String Password { get; set; }

        public Role Role { get; set; }
    }
}