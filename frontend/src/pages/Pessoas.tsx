import { useEffect, useState } from "react";
import { api } from "../services/api";
import type { Pessoa } from "../types/Pessoa";
import PessoaList from "../components/Pessoa/PessoaList";
import PessoaForm from "../components/Pessoa/PessoaForm";

/*
 * Página responsável pelo gerenciamento das pessoas.
 *
 * Nesta etapa ela apenas:
 * - Consulta a API;
 * - Armazena as pessoas;
 * - Envia a lista para o componente PessoaList.
 */
function Pessoas() {

    /*
     * Estado responsável por armazenar todas as pessoas
     * retornadas pela API.
     */
    const [pessoas, setPessoas] = useState<Pessoa[]>([]);

    /*
     * Executa apenas quando a página é carregada.
     */
    useEffect(() => {

        carregarPessoas();

    }, []);

    /*
     * Busca todas as pessoas cadastradas.
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
 * Exclui uma pessoa cadastrada.
 *
 * Após a exclusão, a lista é carregada novamente
 * para manter a interface sincronizada com o backend.
 */
        async function excluirPessoa(id: number) {

            const confirmar = window.confirm(
                "Deseja realmente excluir esta pessoa?"
            );

            if (!confirmar)
                return;

            try {

                await api.delete(`/pessoas/${id}`);

                await carregarPessoas();

            }
            catch (erro) {

                console.error("Erro ao excluir pessoa.", erro);

                alert("Não foi possível excluir.");

            }

        }

    return (

        <div>

            <PessoaForm atualizarLista={carregarPessoas} />
            <PessoaList
                pessoas={pessoas}
                excluirPessoa={excluirPessoa}
            />

            <hr />


            

        </div>

    );

}

export default Pessoas;