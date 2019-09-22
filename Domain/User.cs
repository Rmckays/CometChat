using System;

namespace Domain
{
   public class User
   {
      public Guid Id { get; set; }
      public string Username { get; set; }

      public string Email { get; set; }

      public string Name { get; set; }

      public string Password { get; set; }

      public string Avatar { get; set; }
      public DateTime CreatedOn { get; set; }
   }
}