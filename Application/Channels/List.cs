using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Channels
{
   public class List
   {
      public class Query : IRequest<List<Channel>> { }

      public class Handler : IRequestHandler<Query, List<Channel>>
      {
         private readonly ChatAppContext _context;

         public Handler(ChatAppContext context)
         {
            _context = context;

         }

         public async Task<List<Channel>> Handle(Query request, CancellationToken cancellationToken)
         {
            var channels = await _context.Channels.ToListAsync();

            return channels;
         }

      }
   }
}