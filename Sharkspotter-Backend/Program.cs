using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
<<<<<<< Updated upstream
=======
using Microsoft.OpenApi.Models;
>>>>>>> Stashed changes
using Sharkspotter_Backend;
using Sharkspotter_Backend.Data;
using Sharkspotter_Backend.Models;
using System.Security.Claims;
<<<<<<< Updated upstream
=======
using System.Text;
>>>>>>> Stashed changes

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
<<<<<<< Updated upstream
builder.Services.AddSwaggerGen();

string domain = $"https://{builder.Configuration["Auth0:Domain"]}/";
=======

builder.Services.AddSwaggerGen(
    c =>
    {

      c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
      {
        In = ParameterLocation.Header,
        Description = "Please insert Token",
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        BearerFormat = "JWT",
        Scheme = "bearer"
      });
      c.AddSecurityRequirement(new OpenApiSecurityRequirement{
            {
                new OpenApiSecurityScheme{
                    Reference = new OpenApiReference{
                        Type = ReferenceType.SecurityScheme,
                        Id = "Bearer"
                    }
                },
                new string[]{}
                }
         });
    }
);
var key = "sharkspotterAuth12345%%%%%$$$";

builder.Services.AddAuthentication(x =>
{
  x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
  x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(x =>
{
  x.RequireHttpsMetadata = false;
  x.SaveToken = true;
  x.TokenValidationParameters = new TokenValidationParameters
  {
    ValidateIssuerSigningKey = true,
    IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(key)),
    ValidateIssuer = false,
    ValidateAudience = false

  };
});
builder.Services.AddSingleton<JwtAuthenticationManager>(new JwtAuthenticationManager(key));

/*string domain = $"https://{builder.Configuration["Auth0:Domain"]}/";
>>>>>>> Stashed changes
builder.Services
    .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.Authority = domain;
        options.Audience = builder.Configuration["Auth0:Audience"];
        // If the access token does not have a `sub` claim, `User.Identity.Name` will be `null`. Map it to a different claim by setting the NameClaimType below.
        options.TokenValidationParameters = new TokenValidationParameters
        {
            NameClaimType = ClaimTypes.NameIdentifier
        };
    });
builder.Services.AddAuthorization(options =>
{
<<<<<<< Updated upstream
    options.AddPolicy("read:users", policy => policy.Requirements.Add(new HasScopeRequirement("read:users", domain)));
});
builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("post:spotting", policy => policy.Requirements.Add(new HasScopeRequirement("post:spotting", domain)));
});

builder.Services.AddSingleton<IAuthorizationHandler, HasScopeHandler>();

builder.Services.AddDbContext<DataContext>(
    options => options.UseSqlServer(GetSecretsClass.GetSecret()));
=======
    options.AddPolicy("read:beaches", policy => policy.Requirements.Add(new HasScopeRequirement("read:users", domain)));
});
builder.Services.AddAuthorization(options =>
{
    options.AddPolicy("read:spottings_by_beach_id", policy => policy.Requirements.Add(new HasScopeRequirement("post:spotting", domain)));
});
builder.Services.AddAuthorization(options =>
{
  options.AddPolicy("update:spottings_by_beach_id", policy => policy.Requirements.Add(new HasScopeRequirement("post:spotting", domain)));
});

builder.Services.AddSingleton<IAuthorizationHandler, HasScopeHandler>();*/

builder.Services.AddDbContext<DataContext>(
    options => options.UseSqlServer(builder.Configuration.GetConnectionString("SharkspotterDB")));
>>>>>>> Stashed changes

builder.Services.AddScoped<UserService>();
builder.Services.AddScoped<BeachService>();
builder.Services.AddScoped<SpottingService>();
<<<<<<< Updated upstream
=======
builder.Services.AddScoped<AdminService>();
>>>>>>> Stashed changes

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
<<<<<<< Updated upstream
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();
app.UseAuthorization();
=======
  app.UseSwagger();
  app.UseSwaggerUI();
}
app.UseCors(x => x
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader());
app.UseAuthentication();
app.UseHttpsRedirection();

app.UseAuthorization();
>>>>>>> Stashed changes

app.MapControllers();

app.Run();
