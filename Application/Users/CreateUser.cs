using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Users
{
   public class CreateUser
   {
      public class Command : IRequest
      {
         public Guid Id { get; set; }
         public string Username { get; set; }

         public string Email { get; set; }

         public string Name { get; set; }

         public string Password { get; set; }
         
         public string Avatar { get; set; }
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
            var user = new User
            {
               Id = request.Id,
               Username = request.Username,
               CreatedOn = request.CreatedOn,
               Email = request.Email,
               Name = request.Name,
               Avatar = request.Avatar,
               Password = request.Password
            };

            _context.Users.Add(user);
            var success = await _context.SaveChangesAsync() > 0;

            if (success) return Unit.Value;

            throw new Exception("Problem saving User");
         }
      }

   }
}