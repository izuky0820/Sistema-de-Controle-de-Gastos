namespace Backend.DTOs;

using Backend.Models;

public class CriarTransacaoDto
{
    public string Descricao { get; set; } = string.Empty;

    public double Valor { get; set; }

    public TipoTransacao Tipo { get; set; }

    public int PessoaId { get; set; }
}