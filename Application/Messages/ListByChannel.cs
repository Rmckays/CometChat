using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using System.Linq;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using System;

namespace Application.Messages
{
   public class ListByChannel
   {
      public class Query : IRequest<List<Message>>
      {
         public string ChannelId { get; set; }
      }

      public class Handler : IRequestHandler<Query, List<Message>>
      {
         private readonly ChatAppContext _context;
         public Handler(ChatAppContext context)
         {
            _context = context;
         }

         public async Task<List<Message>> Handle(Query request, CancellationToken cancellationToken)
         {
            // var messages = await _context.Messages.Where(x => x.Channel == request.ChannelId).ToListAsync();
            var messages = await _context.Messages.ToListAsync();

            return messages;
         }
      }
   }
}