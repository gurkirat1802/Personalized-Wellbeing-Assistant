using H1.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace H1.Services
{
    public class MongoService
    {
        private readonly IMongoCollection<User> _usersCollection;
        private readonly IMongoCollection<Support> _supportCollection;
        private readonly IMongoCollection<WaterRecord> _waterRecordCollection;
        private readonly IMongoCollection<UserRecord> _userRecordCollection;

        public MongoService(
            IOptions<HealthBuddyDatabaseSettings> userDatabaseSettings)
        {
            var mongoClient = new MongoClient(
                userDatabaseSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(
                userDatabaseSettings.Value.DatabaseName);

            _usersCollection = mongoDatabase.GetCollection<User>(
                userDatabaseSettings.Value.HealthBuddyCollectionName);

            _userRecordCollection = mongoDatabase.GetCollection<UserRecord>(
                userDatabaseSettings.Value.userRecordCollectionName);

            _waterRecordCollection = mongoDatabase.GetCollection<WaterRecord>(
                userDatabaseSettings.Value.WaterCollectionName);

            _supportCollection = mongoDatabase.GetCollection<Support>(
                userDatabaseSettings.Value.supportCollectionName);
        }

        public async Task<List<User>> GetAsync() =>
            await _usersCollection.Find(_ => true).ToListAsync();

        public async Task<User?> GetAsync(string username, string password) =>
            await _usersCollection.Find(x => x.Username == username && x.Password == password).FirstOrDefaultAsync();

        public async Task CreateAsync(User newBook) =>
            await _usersCollection.InsertOneAsync(newBook);

        public async Task UpdateAsync(string id, User updatedBook) =>
            await _usersCollection.ReplaceOneAsync(x => x.Id == id, updatedBook);

        public async Task RemoveAsync(string id) =>
            await _usersCollection.DeleteOneAsync(x => x.Id == id);

        public async Task<List<UserRecord>> GetRecordAsync() =>
           await _userRecordCollection.Find(_ => true).ToListAsync();

        public async Task<UserRecord?> GetRecordAsync(string id) =>
            await _userRecordCollection.Find(x => x.Id == id).FirstOrDefaultAsync();
        public async Task<List<UserRecord?>> GetRecordByUserIdAsync(string userid, DateTime recordDate) =>
            await _userRecordCollection.Find(x => x.UserId == userid && x.RecordDate.Day == recordDate.Day && x.RecordDate.Month == recordDate.Month && x.RecordDate.Year == recordDate.Year).ToListAsync();

        public async Task CreateRecordAsync(UserRecord newRecord) =>
            await _userRecordCollection.InsertOneAsync(newRecord);

        public async Task UpdateRecordAsync(string id, UserRecord updatedRecord) =>
            await _userRecordCollection.ReplaceOneAsync(x => x.Id == id, updatedRecord);

        public async Task RemoveRecordAsync(string id) =>
            await _userRecordCollection.DeleteOneAsync(x => x.Id == id);

        public async Task<List<WaterRecord>> GetWaterRecordAsync() =>
          await _waterRecordCollection.Find(_ => true).ToListAsync();

        public async Task<WaterRecord?> GetWaterRecordAsync(string id) =>
            await _waterRecordCollection.Find(x => x.Id == id).FirstOrDefaultAsync();
        public async Task<List<WaterRecord?>> GetWaterRecordByUserIdAsync(string userid, DateTime recordDate) =>
            await _waterRecordCollection.Find(x => x.UserId == userid && x.RecordDate.Day == recordDate.Day && x.RecordDate.Month == recordDate.Month && x.RecordDate.Year == recordDate.Year).ToListAsync();

        public async Task CreateWaterRecordAsync(WaterRecord newRecord) =>
            await _waterRecordCollection.InsertOneAsync(newRecord);

        public async Task UpdateWaterRecordAsync(string id, WaterRecord updatedRecord) =>
            await _waterRecordCollection.ReplaceOneAsync(x => x.Id == id, updatedRecord);

        public async Task RemoveWaterRecordAsync(string id) =>
            await _waterRecordCollection.DeleteOneAsync(x => x.Id == id);

        public async Task CreateSupportRequestAsync(Support newRecord) =>
           await _supportCollection.InsertOneAsync(newRecord);
    }
}
