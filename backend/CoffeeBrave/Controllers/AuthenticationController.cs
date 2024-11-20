using CoffeeBrave.DB;
using CoffeeBrave.Models;
using CoffeeBrave.Models.Configs;
using CoffeeBrave.Models.Request;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace CoffeeBrave.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthenticationController : ControllerBase
    {
        public IUserDB IUserDB { get; set; }
        private TokenSettings _tokenSettings;


        public AuthenticationController(
            IUserDB iUserDB,
            IOptions<TokenSettings> tokenSettings) 
        {
            _tokenSettings = tokenSettings.Value;
            IUserDB = iUserDB;
        }

        [HttpGet("IsLogged")]
        [Authorize]
        public IActionResult IsLogged()
        {
            return Ok();
        }

        [HttpGet("TestAdmin")]
        [Authorize(Roles = "Admin")]
        public IActionResult TestAdmin()
        {
            return Ok();
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

            user = IUserDB.Login(user);
            if (user == null)
                return Unauthorized();
            else
            {
                string token = GenerateToken(user.Email, user.Type);
                return Ok(new { token = token });
            }
        }

        private string GenerateToken(string email, UserType role) 
        {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_tokenSettings.Secret));
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var claims = new[]
             {
                new Claim(ClaimTypes.Name, email),
                new Claim(ClaimTypes.Role, role.ToString())
            };

            var token = new JwtSecurityToken(
                issuer: "https://coffeebrave.com.br",
                claims: claims,
                expires: DateTime.UtcNow.AddHours(8),
                signingCredentials: credentials);

            var tokenHandler = new JwtSecurityTokenHandler();
            var tokenString = tokenHandler.WriteToken(token);

            return tokenString;
        }

    }

}
