using CoffeeBrave.DB;
using CoffeeBrave.Models;
using CoffeeBrave.Models.Request;
using Microsoft.AspNetCore.Mvc;

namespace CoffeeBrave.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthenticationController : ControllerBase
    {
        public IUserDB IUserDB { get; set; }

        public AuthenticationController(IUserDB iUserDB) {
            IUserDB = iUserDB;
        }

        [HttpPost("SignUp")]
        public IActionResult SignUp([FromBody]User signUp)
        {
            IUserDB.SignUp(signUp);
            return Ok();
        }

        [HttpPost("Login")]
        public IActionResult Login([FromBody] UserLoginRequest login) 
        {
            User user = new User();
            user.Email = login.Email;
            user.Password = login.Password;

            if (IUserDB.Login(user) == false)
                return Unauthorized();
            else
                return Ok();
        }

    }

}
