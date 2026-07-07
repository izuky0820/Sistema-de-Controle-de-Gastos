using System;
namespace Backend.Models;
public class Pessoa{
    int id;
    int idade;
    string nome;

    public Pessoa(int id, string nome, int idade ){
        this.nome = nome;
        this.idade = idade;
        this.id = id;
    }

    public int Id{
        get{return id;}
        set{id = value;}
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