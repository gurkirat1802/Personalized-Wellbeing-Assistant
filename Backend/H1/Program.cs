using H1.Models;
using H1.Services;
using MongoDB.Driver;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// MongoDB configuration
//var connectionString = builder.Configuration.GetConnectionString("MongoDB");
//builder.Services.AddSingleton<IMongoClient>(new MongoClient(connectionString));
//builder.Services.AddTransient<UserRepository>();

builder.Services.Configure<HealthBuddyDatabaseSettings>(
    builder.Configuration.GetSection("HealthBuddyDatabase"));

builder.Services.AddSingleton<MongoService>();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
