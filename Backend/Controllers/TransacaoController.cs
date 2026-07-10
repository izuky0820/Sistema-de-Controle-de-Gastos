using Backend.DTOs;
using Backend.Models;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TransacoesController : ControllerBase
{
    private readonly JsonService _jsonService;

    public TransacoesController(JsonService jsonService)
    {
        _jsonService = jsonService;
    }

    //Get
    [HttpGet]
    public async Task<IActionResult> Listar()
    {
        var dados = await _jsonService.LerDados();

        return Ok(dados.Transacoes);
    }

    //Post
    [HttpPost]
    public async Task<IActionResult> Criar([FromBody] CriarTransacaoDto novaTransacao)
    {
        var dados = await _jsonService.LerDados();

        // Verifica se a pessoa informada existe antes
        // de criar a transação.
        var pessoa = dados.Pessoas.FirstOrDefault(p => p.Id == novaTransacao.PessoaId);

        if (pessoa == null)
        {
            return BadRequest("Pessoa não encontrada.");
        }

        // Regra de negócio:
        // Menores de idade podem cadastrar apenas despesas.
        if (pessoa.Idade < 18 && novaTransacao.Tipo == TipoTransacao.Receita)
        {
            return BadRequest("Ação permitida apenas para 18+");
        }

        // criação do id
        int novoId = dados.Transacoes.Any()
       ? dados.Transacoes.Max(t => t.Id) + 1
       : 1;

        // cria o objeto
        Transacao transacao = new Transacao(novoId, novaTransacao.Descricao, novaTransacao.Valor, novaTransacao.Tipo, novaTransacao.PessoaId);

        // Add na lista
        dados.Transacoes.Add(transacao);

        // Salva no arquivo JSON
        
        await _jsonService.Save(dados);
       
        return CreatedAtAction(nameof(Listar), new { id = transacao.Id }, transacao);
    }
}