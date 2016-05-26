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

        public DbSet<User> users { get; set; }
    }
}