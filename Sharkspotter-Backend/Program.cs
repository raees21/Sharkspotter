using Microsoft.EntityFrameworkCore;
using Sharkspotter_Backend.Data;
using Sharkspotter_Backend.SecretsManager;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<DataContext>(
    options => options.UseSqlServer(GetSecretsClass.GetSecret()));

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
