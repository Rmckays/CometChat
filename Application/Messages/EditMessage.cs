using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Messages
{
  public class EditMessage
  {
    public class Command : IRequest
    {
      public Guid Id { get; set; }

      public string Text { get; set; }
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
        var message = await _context.Messages.FindAsync(request.Id);

        if (message == null)
        {
          throw new Exception("Could not find message");
        }

        message.Text = request.Text ?? message.Text;

        var success = await _context.SaveChangesAsync() > 0;

        if (success) return Unit.Value;

        throw new Exception("Problem saving changes");

      }
    }
  }
}