namespace H1.Models
{
    public class HealthBuddyDatabaseSettings
    {
        public string ConnectionString { get; set; } = null!;

        public string DatabaseName { get; set; } = null!;

        public string HealthBuddyCollectionName { get; set; } = null!;
        public string WaterCollectionName { get; set; } = null!;
        public string userRecordCollectionName { get; set; } = null!;
        public string supportCollectionName { get; set; } = null!;
    }
}
