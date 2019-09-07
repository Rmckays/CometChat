using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Channels;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{

   [Route("api/[controller]")]
   [ApiController]
   public class ChannelsController
   {
      private readonly IMediator _mediator;

      public ChannelsController(IMediator mediator)
      {
         _mediator = mediator;
      }

      [HttpGet]

      public async Task<ActionResult<List<Channel>>> List()
      {
         return await _mediator.Send(new List.Query());
      }

      [HttpPost]

      public async Task<ActionResult<Unit>> Create(CreateChannel.Command command)
      {
         return await _mediator.Send(command);
      }
   }
}