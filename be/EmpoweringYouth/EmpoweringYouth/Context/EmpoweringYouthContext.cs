using EmpoweringYouth.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace EmpoweringYouth.Context
{
    public class EmpoweringYouthContext: DbContext
    {

        public EmpoweringYouthContext(): base()
        {

        }

        public DbSet<User> users;
    }
}