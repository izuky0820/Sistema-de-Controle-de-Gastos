import { useEffect, useState } from "react";
import { api } from "./services/api";
import type { Pessoa } from "./types/Pessoa";

/*
 * Componente principal da aplicação.
 *
 * Neste primeiro momento, sua responsabilidade é:
 * - Buscar a lista de pessoas cadastradas no backend;
 * - Armazenar essas pessoas na memória;
 * - Exibir essas informações na tela.
 */
function App() {

    /*
     * Estado que armazena todas as pessoas retornadas pela API.
     *
     * useState cria uma variável "reativa".
     * Sempre que ela for alterada usando setPessoas(),
     * a tela será renderizada novamente automaticamente.
     */
    const [pessoas, setPessoas] = useState<Pessoa[]>([]);

    /*
     * useEffect é executado quando o componente é carregado.
     *
     * Como o vetor de dependências está vazio ([]),
     * esse código será executado apenas uma única vez.
     */
    useEffect(() => {

        carregarPessoas();

    }, []);

    /*
     * Responsável por buscar todas as pessoas cadastradas
     * através da API.
     */
    async function carregarPessoas() {

        try {

            /*
             * Faz uma requisição GET para:
             * http://localhost:5063/api/pessoas
             */
            const resposta = await api.get("/pessoas");

            /*
             * Atualiza o estado da aplicação com
             * os dados recebidos.
             */
            setPessoas(resposta.data);

        }
        catch (erro) {

            /*
             * Caso ocorra algum erro na comunicação
             * com a API, ele será exibido no console.
             */
            console.error("Erro ao carregar pessoas:", erro);

        }

    }

    /*
     * Responsável pela interface apresentada ao usuário.
     */
    return (

        <div style={{ padding: "20px" }}>

            <h1>Controle de Gastos Residenciais</h1>

            <hr />

            <h2>Pessoas cadastradas</h2>

            <ul>

                {
                    pessoas.map((pessoa) => (

                        <li key={pessoa.id}>

                            {pessoa.nome} - {pessoa.idade} anos

                        </li>

                    ))
                }

            </ul>

        </div>

    );

}

export default App;