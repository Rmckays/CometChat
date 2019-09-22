using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Messages
{
   public class CreateMessage
   {

      public class Command : IRequest<Message>
      {
         public Guid Id { get; set; }

         public string Text { get; set; }

         public Guid UserId { get; set; }

         public Guid ChannelId { get; set; }

         public DateTime CreatedAt { get; set; }
      }

      public class Handler : IRequestHandler<Command, Message>
      {
         public Handler(ChatAppContext context)
         {
            _context = context;
         }

         public readonly ChatAppContext _context;

         public async Task<Message> Handle(Command request, CancellationToken cancellationToken)
         {
            var user =  await _context.Users.FirstOrDefaultAsync(x => x.Id == request.UserId);
            var channel = await _context.Channels.FirstOrDefaultAsync(x => x.Id == request.ChannelId);

            var message = new Message
            {
               Id = request.Id,
               Text = request.Text,
               User = user,
               Channel = channel,
               CreatedAt = request.CreatedAt
            };

            _context.Messages.Add(message);
            var success = await _context.SaveChangesAsync() > 0;

            if (success) return message;

            throw new Exception("Problem saving message");
         }
      }
   }
}