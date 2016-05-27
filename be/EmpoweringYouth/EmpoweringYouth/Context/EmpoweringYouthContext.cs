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

        public EmpoweringYouthContext() : base("EYContext")
        {
            Database.SetInitializer<EmpoweringYouthContext>(new EmpoweringYouthContextInitializer());
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {

            base.OnModelCreating(modelBuilder);
        }

        public DbSet<User> users { get; set; }
        public DbSet<Conversation> conversations { get; set; }
        public DbSet<Message> messages { get; set; }
    }
}