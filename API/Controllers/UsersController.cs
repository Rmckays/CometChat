using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Users;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;


namespace API.Controllers
{

   [Route("api/[controller]")]
   [ApiController]
   public class UsersController : ControllerBase
   {
      private readonly IMediator _mediator;
      public UsersController(IMediator mediator)
      {
         _mediator = mediator;
      }

      [HttpGet]
      public async Task<ActionResult<List<User>>> List()
      {
         return await _mediator.Send(new List.Query());
      }

      [HttpGet("{id}")]
      public async Task<ActionResult<User>> GetUser(Guid id)
      {
         return await _mediator.Send(new GetUser.Query { Id = id });
      }

      [HttpPost]
      public async Task<ActionResult<Unit>> Create(CreateUser.Command command)
      {
         return await _mediator.Send(command);
      }

      [HttpPut("{id}")]
      public async Task<ActionResult<Unit>> Edit(Guid id, EditUser.Command command)
      {
         command.Id = id;
         return await _mediator.Send(command);
      }
   }
}