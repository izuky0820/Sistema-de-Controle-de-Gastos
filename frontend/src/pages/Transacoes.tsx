import { useEffect, useState } from "react";
import { api } from "../services/api";

import type { Pessoa } from "../types/Pessoa";
import type { Transacao } from "../types/Transacao";

import TransacaoForm from "../components/Transacao/TransacaoForm";
import TransacaoList from "../components/Transacao/TransacaoList";

/*
 * Página responsável pelo gerenciamento das transações.
 *
 * Responsabilidades:
 * - Buscar pessoas cadastradas;
 * - Buscar transações;
 * - Atualizar as listas após um cadastro.
 */
function Transacoes() {

    const [pessoas, setPessoas] = useState<Pessoa[]>([]);
    const [transacoes, setTransacoes] = useState<Transacao[]>([]);

    useEffect(() => {

        carregarPessoas();
        carregarTransacoes();

    }, []);

    /*
     * Busca todas as pessoas.
     *
     * Essa lista será utilizada no formulário
     * para escolher quem realizou a transação.
     */
    async function carregarPessoas() {

        try {

            const resposta = await api.get("/pessoas");

            setPessoas(resposta.data);

        }

        catch (erro) {

            console.error("Erro ao carregar pessoas.", erro);

        }

    }

    /*
     * Busca todas as transações cadastradas.
     */
    async function carregarTransacoes() {

        try {

            const resposta = await api.get("/transacoes");

            setTransacoes(resposta.data);

        }

        catch (erro) {

            console.error("Erro ao carregar transações.", erro);

        }

    }

    return (

        <div>

            <TransacaoForm
                pessoas={pessoas}
                atualizarLista={carregarTransacoes}
            />

            <hr />

            <TransacaoList
                transacoes={transacoes}
                pessoas={pessoas}
            />

        </div>

    );

}

export default Transacoes;