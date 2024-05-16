using H1.Models;
using H1.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using static H1.Controllers.AuthController;

namespace H1.Controllers
{
    public class AuthController : Controller
    {
        private readonly MongoService _mongoService;
        public AuthController(MongoService mongoService)
        {
            _mongoService = mongoService;
        }
        public class LoginModel
        {
            public string EmailId { get; set; }
            public string Password { get; set; }
            public string PhoneNumber { get; set; }
        }
        [Route("Signin")]
        [HttpPost]
        public async Task<IActionResult> Login([FromBody] LoginModel loginModel)
        {
            try
            {
                if (loginModel != null)
                {
                    var existingUserData = await _mongoService.GetAsync(loginModel.EmailId, loginModel.Password);
                    //var existingUserData = userData.Result.Where(w => w.Username == loginModel.EmailId && w.Password == loginModel.Password).FirstOrDefault();
                    if (existingUserData == null)
                        return BadRequest("user does not exists");
                    else
                        return Ok(existingUserData);
                }
                else
                    return BadRequest("login model is not correct");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }
        [Route("Signup")]
        [HttpPost]
        public async Task<IActionResult> Signup([FromBody] LoginModel model)
        {
            try
            {
                if (model != null)
                {
                    var user = new User
                    {
                        Username = model.EmailId,
                        Password = model.Password,
                        PhoneNumber = model.PhoneNumber
                    };

                    await _mongoService.CreateAsync(user);
                    var userData =await _mongoService.GetAsync(user.Username, user.Password);
                    //var existingUserData = userData.Where(w => w.Username == model.EmailId && w.Password == model.Password).FirstOrDefault();
                    return Ok(userData);
                }
                else
                    return BadRequest("login model is not correct");
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }
        public class ContactDetails
        {
            public string Id { get; set; }
            public string Username { get; set; }
            public string Password { get; set; }
            public string PhoneNumber { get; set; }
            public string FirstName { get; set; }
            public string LastName { get; set; }
            public string Age { get; set; }
            public string Gender { get; set; }
            public string Height { get; set; }
            public string Weight { get; set; }
            public string Goal { get; set; }
            public string ExerciseLevel { get; set; }
        }
        [Route("AddContactDetails")]
        [HttpPost]
        public async Task<IActionResult> AddContactDetails([FromBody] ContactDetails model)
        {
            try
            {
                if (model != null)
                {
                    var existingUserData = await _mongoService.GetAsync(model.Username, model.Password);
                    //var existingUserData = userData.Result.Where(w => w.Id == model.Id).FirstOrDefault();
                    existingUserData.Age = model.Age;
                    existingUserData.ExerciseLevel = model.ExerciseLevel;
                    existingUserData.Weight = model.Weight;
                    existingUserData.Height = model.Height;
                    existingUserData.LastName = model.LastName;
                    existingUserData.FirstName = model.FirstName;
                    existingUserData.Gender = model.Gender;
                    existingUserData.Goal = model.Goal;
                    await _mongoService.UpdateAsync(model.Id, existingUserData);
                    //  await _mongoService.CreateAsync(user);
                }
                else
                    return BadRequest("login model is not correct");
                return Ok("");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }
    }
}
