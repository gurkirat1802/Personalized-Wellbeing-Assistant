using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace H1.Models
{
    public class Support
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public string UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string EmailId { get; set; }
        public string Message { get; set; }
    }
}
