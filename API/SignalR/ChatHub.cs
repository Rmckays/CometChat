using System;
using System.Threading.Tasks;
using Application.Messages;
using MediatR;
using Microsoft.AspNetCore.SignalR;
using Persistence;

namespace API.SignalR
{
    public class ChatHub : Hub
    {
        private readonly IMediator _mediator;
        private readonly ChatAppContext _context;

        public ChatHub(IMediator mediator, ChatAppContext context)
        {
            _mediator = mediator;
            _context = context;
        }

        public async Task SendMessage(CreateMessage.Command command)
        {
            var message = await _mediator.Send(command);
            Console.WriteLine("*************************Sending message:****************************");
            await Clients.All.SendAsync("ReceiveMessage", message);
        }
    }
}