using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Channels
{
   public class EditChannel
   {
      public class Command : IRequest
      {
         public Guid Id { get; set; }
         public string Name { get; set; }
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
            var channel = await _context.Channels.FindAsync(request.Id);

            if (channel == null)
            {
               throw new Exception("Could not find Channel");
            }

            channel.Name = request.Name ?? channel.Name;

            var success = await _context.SaveChangesAsync() > 0;

            if (success) return Unit.Value;

            throw new Exception("Problem saving changes");
         }
      }
   }
}