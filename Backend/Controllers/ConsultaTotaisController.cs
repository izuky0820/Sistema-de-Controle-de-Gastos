using Backend.Models;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ConsultaTotaisController : ControllerBase
{
    private readonly JsonService _jsonService;

    public ConsultaTotaisController(JsonService jsonService)
    {
        _jsonService = jsonService;
    }

    // Get
    [HttpGet]
    public async Task<IActionResult> Consultar()
    {
        // Lê todos os dados armazenados no arquivo JSON.
        var dados = await _jsonService.LerDados();

        // Para cada pessoa cadastrada, calcula seus totais individuais.
        var resultado = dados.Pessoas.Select(pessoa =>
        {
            // Filtra apenas as transações pertencentes à pessoa atual.
            var transacoesPessoa = dados.Transacoes
                .Where(t => t.PessoaId == pessoa.Id);

            // Soma todas as receitas da pessoa.
            double receitas = transacoesPessoa
                .Where(t => t.Tipo == TipoTransacao.Receita)
                .Sum(t => t.Valor);

            // Soma todas as despesas da pessoa.
            double despesas = transacoesPessoa
                .Where(t => t.Tipo == TipoTransacao.Despesa)
                .Sum(t => t.Valor);

            // Retorna um objeto contendo o resumo financeiro da pessoa.
            return new
            {
                pessoa.Id,
                pessoa.Nome,
                Receitas = receitas,
                Despesas = despesas,
                Saldo = receitas - despesas // Saldo = receitas - despesas
            };

        }).ToList();

        // Calcula os totais gerais somando os resultados de todas as pessoas.
        double totalReceitas = resultado.Sum(x => x.Receitas);
        double totalDespesas = resultado.Sum(x => x.Despesas);

        // Retorna a resposta da API contendo:
        // - Resumo individual de cada pessoa;
        // - Totais gerais do sistema.
        return Ok(new
        {
            Pessoas = resultado,
            TotalReceitas = totalReceitas,
            TotalDespesas = totalDespesas,
            SaldoGeral = totalReceitas - totalDespesas
        });
    }
}