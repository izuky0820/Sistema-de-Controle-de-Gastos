using Backend.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddOpenApi();
builder.Services.AddSingleton<JsonService>();

// Configuração do CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("React",
        policy =>
        {
            policy.WithOrigins("http://localhost:5173")
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

// Permite que o frontend React faça requisições para esta API
app.UseCors("React");

app.MapControllers();

app.Run();