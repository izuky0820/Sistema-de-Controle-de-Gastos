public class Transacoes{
    int id;
    string descricao;
    double valor;
    TipoTransacao tipo;
    int PessoaId;

     public Transacao(int id, string descricao, double valor, TipoTransacao tipo, int pessoaId)
    {
        this.id = id;
        this.descricao = descricao;
        this.valor = valor;
        this.tipo = tipo;
        this.pessoaId = pessoaId;
    }

    public int Id{
        get{return id;}
    }

    public string Descricao{
        get{return descricao;}
        set{descricao = value;}
    }

    public double Valor{
        get{return valor;}
        set{valor = value;}
    }

    public int PessoaId {
        get{return pessoaId;}
    }

    public TipoTransacao Tipo
    {
        get{return tipo;}
        set{tipo = value;}
    }
}