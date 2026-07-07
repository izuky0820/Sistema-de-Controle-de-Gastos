using Backend.Services;

var builder = WebApplication.CreateBuilder(args);

// Adiciona suporte aos Controllers
builder.Services.AddControllers();

// OpenAPI (documentação da API)
builder.Services.AddOpenApi();

// Registra o JsonService para injeção de dependência
builder.Services.AddSingleton<JsonService>();

var app = builder.Build();

// Configuração da documentação
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

// Mapeia os Controllers
app.MapControllers();

app.Run();