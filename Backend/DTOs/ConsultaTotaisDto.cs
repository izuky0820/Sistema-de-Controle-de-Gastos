public class ConsultaTotaisDto
{
    public List<TotalPessoaDto> Pessoas { get; set; } = new();
    public double TotalReceitas { get; set; }
    public double TotalDespesas { get; set; }
    public double SaldoGeral { get; set; }
}