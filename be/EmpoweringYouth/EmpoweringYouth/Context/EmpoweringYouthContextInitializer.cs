using EmpoweringYouth.Controllers;
using EmpoweringYouth.Models;
using EmpoweringYouth.Services;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace EmpoweringYouth.Context
{
    public class EmpoweringYouthContextInitializer : DropCreateDatabaseAlways<EmpoweringYouthContext>
    {

        protected override void Seed(EmpoweringYouthContext context)
        {

            IList<User> defaultUsers = new List<User>();
            defaultUsers.Add(new User() { Password = AuthService.GeneratePasswordHash("password"), Username = "vlad.datcu@kalon.ro", Firstname = "Vlad", Lastname = "Datcu", Role = Role.CW });
            defaultUsers.Add(new User() { Password = AuthService.GeneratePasswordHash("pass"), Username = "ionut.radu@kalon.ro", Firstname = "Ionut", Lastname = "Radu", Role = Role.CW });

            foreach (User u in defaultUsers)
            {
                context.users.Add(u);
            }

            base.Seed(context);
        }
    }
}