using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Messages;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Persistence;

namespace API.Controllers
{
   [Route("api/[controller]")]
   [ApiController]
   public class MessagesController : ControllerBase
   {
      private readonly IMediator _mediator;
      private readonly ChatAppContext _context;
      public MessagesController(IMediator mediator, ChatAppContext context)
      {
         _context = context;
         _mediator = mediator;
      }

      [HttpPost]
      public async Task<ActionResult<Unit>> Create(CreateMessage.Command command)
      {
         return await _mediator.Send(command);
      }

      [HttpPut("{id}")]

      public async Task<ActionResult<Unit>> Edit(Guid id, EditMessage.Command command)
      {
         command.Id = id;
         return await _mediator.Send(command);
      }

      [HttpGet("{id}")]
      public async Task<ActionResult<List<Message>>> ListByChannel(Guid id)
      {
         return await _mediator.Send(new ListByChannel.Query() { ChannelId = id });
      }

      // [HttpGet("{id}")]
      // public async Task<ActionResult<Message>> GetMessage(Guid id)
      // {
      //    return await _mediator.Send(new Details.Query { Id = id });
      // }

   }
}