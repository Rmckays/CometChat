using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Users
{
   public class GetUser
   {
      public class Query : IRequest<User>
      {
         public Guid Id { get; set; }
         public string Username { get; set; }
      }

      public class Handler : IRequestHandler<Query, User>
      {
         private readonly ChatAppContext _context;
         public Handler(ChatAppContext context)
         {
            _context = context;
         }

         public async Task<User> Handle(Query request, CancellationToken cancellationToken)
         {

            var user =  await _context.Users.FirstOrDefaultAsync(c => c.Username == request.Username);

            return user;
         }
      }
   }
}