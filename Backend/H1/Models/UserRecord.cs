using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace H1.Models
{
    public class UserRecord
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public string Name { get; set; }
        public string UserId { get; set; }
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
}
