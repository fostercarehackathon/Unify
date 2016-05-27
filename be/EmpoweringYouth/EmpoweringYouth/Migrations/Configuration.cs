namespace EmpoweringYouth.Migrations
{
    using Models;
    using Services;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<EmpoweringYouth.Context.EmpoweringYouthContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(EmpoweringYouth.Context.EmpoweringYouthContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //

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
