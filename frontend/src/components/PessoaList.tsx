import type { Pessoa } from "../types/Pessoa";

/*
 * Propriedades recebidas pelo componente.
 *
 * pessoas:
 * Lista de pessoas que será exibida.
 *
 * excluirPessoa:
 * Função responsável por excluir uma pessoa.
 * Essa função pertence à página Pessoas e é passada
 * para este componente.
 */
interface PessoaListProps {

    pessoas: Pessoa[];

    excluirPessoa: (id: number) => void;

}

/*
 * Componente responsável apenas por exibir
 * a lista de pessoas cadastradas.
 *
 * Este componente não faz comunicação com a API.
 * Apenas apresenta os dados e informa qual pessoa
 * deverá ser excluída quando o botão for clicado.
 */
function PessoaList({ pessoas, excluirPessoa }: PessoaListProps) {

    return (

        <ul>

            {

                pessoas.map((pessoa) => (

                    <li key={pessoa.id}>

                        {pessoa.nome} - {pessoa.idade} anos

                        {" "}

                        <button
                            onClick={() => excluirPessoa(pessoa.id)}
                        >

                            Excluir

                        </button>

                    </li>

                ))

            }

        </ul>

    );

}

export default PessoaList;