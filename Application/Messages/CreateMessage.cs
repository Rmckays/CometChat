using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Messages
{
   public class CreateMessage
   {

      public class Command : IRequest
      {
         public Guid Id { get; set; }

         public string Text { get; set; }

         public Guid UserId { get; set; }

         public DateTime CreatedAt { get; set; }
      }

      public class Handler : IRequestHandler<Command>
      {
         public Handler(ChatAppContext context)
         {
            _context = context;
         }

         public readonly ChatAppContext _context;

         public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
         {
            var user = _context.Users.FirstOrDefault(x => x.Id == request.UserId);

            var message = new Message
            {
               Id = request.Id,
               Text = request.Text,
               User = user,
               CreatedAt = request.CreatedAt
            };

            _context.Messages.Add(message);
            var success = await _context.SaveChangesAsync() > 0;

            if (success) return Unit.Value;

            throw new Exception("Problem saving message");
         }
      }
   }
}