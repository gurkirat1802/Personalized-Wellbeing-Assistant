using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace H1.Models
{
    public class User
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("Name")]
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
}
