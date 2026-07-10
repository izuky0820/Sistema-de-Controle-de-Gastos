
using Backend.Services;
using Microsoft.AspNetCore.Mvc;
using Backend.DTOs;
using Backend.Models;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]

public class PessoasController : ControllerBase
{
    // a instância do JsonService é entregue autoamaticamente pelo .NET
    private readonly JsonService _jsonService;
    public PessoasController(JsonService jsonService)
    {
        _jsonService = jsonService;
    }

    // Get
    [HttpGet]
    public async Task<IActionResult> Listar()
    {
        var dados = await _jsonService.LerDados();
        return Ok(dados.Pessoas);
    }
    // POST
    [HttpPost]
    public async Task<IActionResult> Criar(CriarPessoaDto novaPessoa)
    {
        // Nome obrigatório
        if (string.IsNullOrWhiteSpace(novaPessoa.Nome))
        {
            return BadRequest("O nome é obrigatório.");
        }

        // Idade válida
        if (novaPessoa.Idade < 0 || novaPessoa.Idade > 120)
        {
            return BadRequest("Idade inválida.");
        }

        var dados = await _jsonService.LerDados();

        // Gera um novo ID
        int novoId = dados.Pessoas.Any()
            ? dados.Pessoas.Max(p => p.Id) + 1
            : 1;

        // Cria a pessoa
        Pessoa pessoa = new Pessoa
        (
            novoId,
            novaPessoa.Nome,
            novaPessoa.Idade
        );

        // Adiciona na lista
        dados.Pessoas.Add(pessoa);

        // Salva no JSON
        await _jsonService.Save(dados);

        return CreatedAtAction(
            nameof(Listar),
            new { id = pessoa.Id },
            pessoa);
    }

    // DELETE
    [HttpDelete("{id}")]
    public async Task<IActionResult> Excluir(int id)
    {
        var dados = await _jsonService.LerDados();

        // Procura a pessoa
        var pessoa = dados.Pessoas.FirstOrDefault(p => p.Id == id);

        if (pessoa == null)
        {
            return NotFound("Pessoa não encontrada.");
        }

        // Remove a pessoa
        dados.Pessoas.Remove(pessoa);

        // Remove todas as transações dessa pessoa
        dados.Transacoes.RemoveAll(t => t.PessoaId == id);

        // Salva as alterações
        await _jsonService.Save(dados);

        return NoContent();
    }
}

