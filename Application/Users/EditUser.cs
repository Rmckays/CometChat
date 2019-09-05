using System;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Persistence;

namespace Application.Users
{
   public class EditUser
   {
      public class Command : IRequest
      {
         public Guid Id { get; set; }
         public string Username { get; set; }

         public string Email { get; set; }

         public string Name { get; set; }

         public string Password { get; set; }

         public DateTime CreatedOn { get; set; }
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
            var user = await _context.Users.FindAsync(request.Id);
            if (user == null)
            {
               throw new Exception("Could not find User");
            }

            user.Name = request.Name ?? user.Name;
            user.Email = request.Email ?? user.Email;
            user.Password = request.Password ?? user.Password;

            var success = await _context.SaveChangesAsync() > 0;

            if (success) return Unit.Value;

            throw new Exception("Problem saving changes");
         }

      }
   }
}