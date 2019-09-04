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
   }
}