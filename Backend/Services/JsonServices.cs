using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using Backend.Models;

namespace Backend.Services;

/*
 * Serviço responsável pela persistência dos dados.
 *
 * Todas as operações de leitura e escrita do arquivo
 * dados.json são centralizadas nesta classe.
 */
public class JsonService
{

    private readonly string _caminhoArquivo = "Data/dados.json";
    /*
    * Lê o conteúdo do arquivo JSON e o converte
    * para um objeto DadosSistema.
    *
    * Caso o arquivo não exista ou esteja vazio,
    * retorna uma estrutura vazia.
    */
    public async Task<DadosSistema> LerDados()
    {
        if (!(File.Exists(_caminhoArquivo))) { return new DadosSistema(); } // apenas se o arquivo existir

        string json = await File.ReadAllTextAsync(_caminhoArquivo, Encoding.UTF8); // ler todo o texto

        if (string.IsNullOrWhiteSpace(json)) { return new DadosSistema(); }

        return JsonSerializer.Deserialize<DadosSistema>(json) ?? new DadosSistema(); // converrte JSON para objeto
    }

    /*
 * Serializa os dados do sistema em formato JSON
 * e grava o conteúdo no arquivo de persistência.
 */
    public async Task Save(DadosSistema dados)
    {
        var op = new JsonSerializerOptions { WriteIndented = true }; // melhora de visualização

        string json = JsonSerializer.Serialize(dados, op); // converte objeto para json

        await File.WriteAllTextAsync(_caminhoArquivo, json, Encoding.UTF8); //substitui o conteúdo antigo pelo novo;
    }
}