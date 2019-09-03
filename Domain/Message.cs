using System;

namespace Domain
{
   public class Message
   {
      public Guid Id { get; set; }

      public string Text { get; set; }

      public User User { get; set; }

      public DataTime Date { get; set; }

   }
}
