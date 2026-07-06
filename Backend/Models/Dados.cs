namespace Backend.Models;
// Conteúdo JSON
public class DadosSistema
{
    public List<Pessoa> Pessoas { get; set; } = new();

    public List<Transacao> Transacoes { get; set; } = new();
}
