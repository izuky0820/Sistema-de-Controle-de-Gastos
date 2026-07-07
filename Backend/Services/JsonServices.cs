using System.Text.Json;
using System.Threading.Tasks;
using Backend.Models;

namespace Backend.Services;

public class JsonService
{
  
    private readonly string _caminhoArquivo = "Data/dados.json";
    public async Task<DadosSistema> LerDados() // Ler dados do arquivo .JSON
    {
        if(!(File.Exists(_caminhoArquivo))){return new DadosSistema();} // apenas se o arquivo existir
        
        string json = await File.ReadAllTextAsync(_caminhoArquivo); // ler todo o texto

        if(string.IsNullOrWhiteSpace(json)){return new DadosSistema();}

        return JsonSerializer.Deserialize<DadosSistema>(json) ?? new DadosSistema(); // converrte JSON para objeto
    }

    public async Task Save(DadosSistema dados)
    {
        var op = new JsonSerializerOptions{WriteIndented = true}; // melhora de visualização

        string json = JsonSerializer.Serialize(dados, op); // converte objeto para json

        await File.WriteAllTextAsync(_caminhoArquivo, json); //substitui o conteúdo antigo pelo novo;
    }
}