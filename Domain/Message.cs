﻿using System;

namespace Domain
{
   public class Message
   {
      public Guid Id { get; set; }

      public string Text { get; set; }

      public User User { get; set; }

      public Channel Channel { get; set; }

      public DateTime CreatedAt { get; set; }

   }
}
