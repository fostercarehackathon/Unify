using EmpoweringYouth.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace EmpoweringYouth.Context
{
    public class EmpoweringYouthContext : DbContext
    {

        public EmpoweringYouthContext() : base()
        {
            Database.SetInitializer<EmpoweringYouthContext>(new EmpoweringYouthContextInitializer());
        }

<<<<<<< HEAD
        public DbSet<User> users { get; set; }
=======
        public DbSet<User> users;

        public DbSet<Conversation> conversations;

        public DbSet<Message> messages;
>>>>>>> 49a92b66a834d52762d3441531b3072b83247fa1
    }
}