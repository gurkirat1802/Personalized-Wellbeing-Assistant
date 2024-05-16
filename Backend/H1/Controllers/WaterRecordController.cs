using H1.Models;
using H1.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using static H1.Controllers.UserRecordController;

namespace H1.Controllers
{
    public class WaterRecordController : Controller
    {
        private readonly MongoService _mongoService;
        public WaterRecordController(MongoService mongoService)
        {
            _mongoService = mongoService;
        }
        public class CreateWaterRecordModel
        {
            public int Glass { get; set; }
            public DateTime RecordDate { get; set; }
            public string UserId { get; set; }
        }
        [Route("CreateWaterRecord")]
        [HttpPost]
        public async Task<IActionResult> CreateWaterRecord([FromBody] CreateWaterRecordModel recordModel)
        {
            try
            {
                if (recordModel != null)
                {
                    WaterRecord record = new()
                    {
                        RecordDate = DateTime.UtcNow,
                        Glass = recordModel.Glass,
                        UserId = recordModel.UserId
                    };
                    await _mongoService.CreateWaterRecordAsync(record);
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
        [Route("GetWaterRecord")]
        [HttpPost]
        public async Task<IActionResult> GetWaterRecord(string userId, DateTime recordDate)
        {
            try
            {
                var waterRecordData = _mongoService.GetWaterRecordByUserIdAsync(userId, recordDate);
                return Ok(waterRecordData.Result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [Route("DeleteWaterRecord")]
        [HttpPost]
        public async Task<IActionResult> DeleteWaterRecord(string id)
        {
            try
            {
                await _mongoService.RemoveWaterRecordAsync(id);
                return Ok("Record deleted");

            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }
    }
}
