using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Users;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Persistence;

namespace API.Controllers
{

   [Route("api/[controller]")]
   [ApiController]
   public class UsersController : ControllerBase
   {
      private readonly IMediator _mediator;
      private readonly ChatAppContext _context;
      public UsersController(IMediator mediator, ChatAppContext context)
      {

         _mediator = mediator;
         _context = context;
      }

      [HttpGet]
      public async Task<ActionResult<List<User>>> List()
      {
         return await _mediator.Send(new List.Query());
      }

      [HttpGet("{username}")]
      public async Task<ActionResult<User>> GetUser(string username)
      {
         // pass in the user into the command.username to get around the DbSet primary key issue.
         return _context.Users.Where(x => x.Username == username).FirstOrDefault();
         // return await _mediator.Send(new GetUser.Query { Username = username });
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

      [HttpDelete("{id}")]
      public async Task<ActionResult<Unit>> Delete(Guid id)
      {
         return await _mediator.Send(new DeleteUser.Command { Id = id });
      }
   }
}