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
    public class ListByUser
    {
        public class Query : IRequest<List<Message>> 
        { 
            public Guid UserId {get; set;}
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
                var channels = await _context.Channels.ToListAsync();
                var users = await _context.Users.ToListAsync();

                var messages = await _context.Messages.Where(c => c.User.Id == request.UserId).ToListAsync();

                return messages;
            }
        }
    }
}