using H1.Models;
using H1.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using static H1.Controllers.AuthController;
using static H1.Controllers.UserRecordController;

namespace H1.Controllers
{
    public class UserRecordController : Controller
    {
        private readonly MongoService _mongoService;
        public UserRecordController(MongoService mongoService)
        {
            _mongoService = mongoService;
        }
        public class RecordModel
        {
            public string UserId { get; set; }
            public string Name { get; set; }
            public int TotalCalories { get; set; }
            public int RemainingCalories { get; set; }
            public int TargetCalories { get; set; }
            public int TotalCarbs { get; set; }
            public int RemainingCarbs { get; set; }
            public int TargetCarbs { get; set; }
            public int TotalFat { get; set; }
            public int RemainingFat { get; set; }
            public int TargetFat { get; set; }
            public int TotalProtein { get; set; }
            public int RemainingProtein { get; set; }
            public int TargetProtein { get; set; }
            public DateTime RecordDate { get; set; }
        }
        [Route("CreateUserRecord")]
        [HttpPost]
        public async Task<IActionResult> CreateUserRecord([FromBody] RecordModel recordModel)
        {
            try
            {
                if (recordModel != null)
                {
                    UserRecord record = new()
                    {
                        RecordDate = DateTime.UtcNow,
                        Name = recordModel.Name,
                        RemainingCalories = recordModel.RemainingCalories,
                        RemainingCarbs = recordModel.RemainingCarbs,
                        RemainingFat = recordModel.RemainingFat,
                        RemainingProtein = recordModel.RemainingProtein,
                        TargetCalories = recordModel.TargetCalories,
                        TargetCarbs = recordModel.TargetCarbs,
                        TargetFat = recordModel.TargetFat,
                        TargetProtein = recordModel.TargetProtein,
                        TotalCalories = recordModel.TotalCalories,
                        TotalCarbs = recordModel.TotalCarbs,
                        TotalFat = recordModel.TotalFat,
                        TotalProtein = recordModel.TotalProtein,
                        UserId = recordModel.UserId
                    };
                    await _mongoService.CreateRecordAsync(record);
                    return Ok("Created!");
                }
                else
                    return BadRequest("model is not correct");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [Route("GetUserRecord")]
        [HttpPost]
        public async Task<IActionResult> GetUserRecord(string userId, DateTime recordDate)
        {
            try
            {
                var userRecordData = _mongoService.GetRecordByUserIdAsync(userId, recordDate);
                return Ok(userRecordData.Result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [Route("DeleteUserRecord")]
        [HttpPost]
        public async Task<IActionResult> DeleteUserRecord(string id)
        {
            try
            {
                await _mongoService.RemoveRecordAsync(id);
                return Ok("Record deleted");

            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }
        public class SupportModel
        {
            public string UserId { get; set; }
            public string FirstName { get; set; }
            public string LastName { get; set; }
            public string EmailId { get; set; }
            public string Message { get; set; }
        }
        [Route("SupportRequest")]
        [HttpPost]
        public async Task<IActionResult> SupportRequest([FromBody] SupportModel supportModel)
        {
            try
            {
                if (supportModel != null)
                {
                    Support record = new()
                    {
                        EmailId = supportModel.EmailId,
                        FirstName = supportModel.FirstName,
                        LastName = supportModel.LastName,
                        Message = supportModel.Message,
                        UserId = supportModel.UserId
                    };
                    await _mongoService.CreateSupportRequestAsync(record);
                    return Ok("Created!");
                }
                else
                    return BadRequest("model is not correct");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }
    }
}
