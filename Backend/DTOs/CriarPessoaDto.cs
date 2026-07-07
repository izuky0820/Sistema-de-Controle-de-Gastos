namespace Backend.DTOs;

// ler apenas o que o usuário informar
public class CriarPessoaDto
{
    public string Nome { get; set; } = string.Empty;

    public int Idade { get; set; }
}