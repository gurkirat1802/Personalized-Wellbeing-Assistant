using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace H1.Models
{
    public class WaterRecord
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public int Glass { get; set; }
        public string UserId { get; set; }
        public DateTime RecordDate { get; set; }

    }
}
