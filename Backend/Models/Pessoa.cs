using System;

public class Pessoa{
    int id;
    int idade;
    string nome;

    public Pessoa(string nome, int idade, int id){
        this.nome = nome;
        this.idade = idade;
        this.id = id;
    }

    public int Id{
        get{return id;}
    }

    public int Idade{
        get{return idade;}
        set{idade = value;}
    }

    public string Nome{
        get{return nome;}
        set{nome = value;}
    }

}