using System;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
   public class ChatAppContext : DbContext
   {
      public ChatAppContext(DbContextOptions<ChatAppContext> options) : base(options)
      {

      }

      public DbSet<Channel> Channels { get; set; }
      public DbSet<Message> Messages { get; set; }
      public DbSet<User> Users { get; set; }
   }
}
