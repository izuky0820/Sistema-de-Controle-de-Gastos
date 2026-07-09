import { useState } from "react";
import { api } from "../../services/api";
import type { Pessoa } from "../../types/Pessoa";
import { TipoTransacao } from "../../types/Transacao";

/*
 * Define as propriedades que o componente receberá.
 */
interface TransacaoFormProps {

    // Lista de pessoas cadastradas.
    pessoas: Pessoa[];

    // Função utilizada para atualizar a lista após um cadastro.
    atualizarLista: () => void;
}

/*
 * Componente responsável pelo cadastro de transações.
 */
function TransacaoForm({
    pessoas,
    atualizarLista
}: TransacaoFormProps) {

    // Estados do formulário.
    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState(0);
    const [tipo, setTipo] = useState(TipoTransacao.Receita);
    const [pessoaId, setPessoaId] = useState(0);

    /*
     * Envia uma nova transação para a API.
     */
    async function cadastrarTransacao() {

    if (descricao.trim() === "") {
        alert("Informe uma descrição.");
        return;
    }

    if (valor <= 0) {
        alert("Informe um valor maior que zero.");
        return;
    }

    if (pessoaId === 0) {
        alert("Selecione uma pessoa.");
        return;
    }

    try {

        await api.post("/transacoes", {

            descricao,
            valor,
            tipo,
            pessoaId

        });

        setDescricao("");
        setValor(0);
        setTipo(TipoTransacao.Receita);
        setPessoaId(0);

        atualizarLista();

    }
    catch (erro) {

        console.error("Erro ao cadastrar transação.", erro);

        alert("Não foi possível cadastrar a transação.");

    }

}

    return (

        <div>

            <h2>Nova Transação</h2>

            <input
                type="text"
                placeholder="Descrição"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
            />

            <br /><br />

            <input
                type="number"
                placeholder="Valor"
                value={valor}
                onChange={(e) => setValor(Number(e.target.value))}
            />

            <br /><br />

            <select

                value={tipo}

                onChange={(e) =>
                    setTipo(Number(e.target.value))
                }

            >

                <option value={TipoTransacao.Receita}>
                    Receita
                </option>

                <option value={TipoTransacao.Despesa}>
                    Despesa
                </option>

            </select>

            <br /><br />

            <select

                value={pessoaId}

                onChange={(e) =>
                    setPessoaId(Number(e.target.value))
                }

            >

                <option value={0}>
                    Selecione uma pessoa
                </option>

                {
                    pessoas.map((pessoa) => (

                        <option
                            key={pessoa.id}
                            value={pessoa.id}
                        >

                            {pessoa.nome}

                        </option>

                    ))
                }

            </select>

            <br /><br />

            <button onClick={cadastrarTransacao}>

                Cadastrar

            </button>

        </div>

    );

}

export default TransacaoForm;