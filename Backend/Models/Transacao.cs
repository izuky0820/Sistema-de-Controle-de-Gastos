using Backend.Models;
namespace Backend.Models;

public class Transacao
{
    int id;
    string descricao;
    double valor;
    TipoTransacao tipo;
    int pessoaId;

    public Transacao(int id, string descricao, double valor, TipoTransacao tipo, int pessoaId)
    {
        this.id = id;
        this.descricao = descricao;
        this.valor = valor;
        this.tipo = tipo;
        this.pessoaId = pessoaId;
    }

    public int Id
    {
        get { return id; }
        set { id = value; }
    }

    public string Descricao
    {
        get { return descricao; }
        set { descricao = value; }
    }

    public double Valor
    {
        get { return valor; }
        set { valor = value; }
    }

    public int PessoaId
    {
        get { return pessoaId; }
        set { pessoaId = value; }
    }

    public TipoTransacao Tipo
    {
        get { return tipo; }
        set { tipo = value; }
    }
    // Sobrescreve ToString para facilitar a depuração e visualização dos objetos.
    public override string ToString()
    {
        return $"Id: {Id} | Descrição: {Descricao} | Valor: {Valor:C} | Tipo: {Tipo} | PessoaId: {PessoaId}";
    }
}