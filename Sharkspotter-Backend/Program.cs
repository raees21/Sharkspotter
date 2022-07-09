using Microsoft.EntityFrameworkCore;
using Sharkspotter_Backend.Data;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

Console.WriteLine("enter connection string");
string connection = Console.ReadLine();


builder.Services.AddDbContext<DataContext>(
    options => options.UseSqlServer(connection));

builder.Services.AddScoped<UserService>();
builder.Services.AddScoped<BeachService>();
builder.Services.AddScoped<SpottingService>();

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
