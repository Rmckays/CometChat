using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Channels
{
   public class CreateChannel
   {

      public class Command : IRequest
      {
         public Guid Id { get; set; }

         public string Name { get; set; }

         public DateTime CreatedAt { get; set; }
      }

      public class Handler : IRequestHandler<Command>
      {
         private readonly ChatAppContext _context;
         public Handler(ChatAppContext context)
         {
            _context = context;
         }

         public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
         {

            var channel = new Channel
            {
               Id = request.Id,
               Name = request.Name,
               CreatedAt = request.CreatedAt
            };

            _context.Channels.Add(channel);


            var success = await _context.SaveChangesAsync() > 0;

            if (success) return Unit.Value;

            throw new Exception("Problem saving changes");
         }
      }
   }
}