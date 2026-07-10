import type { Pessoa } from "../../types/Pessoa";

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
 * a lista de pessoas cadastradas, em forma de tabela.
 *
 * Este componente não faz comunicação com a API.
 * Apenas apresenta os dados e informa qual pessoa
 * deverá ser excluída quando o botão for clicado.
 */
function PessoaList({ pessoas, excluirPessoa }: PessoaListProps) {

    return (
        <div className="table-responsive">
            <table className="table table-striped table-hover">

                <thead>

                    <tr>

                        <th>Nome</th>

                        <th>Idade</th>

                        <th></th>

                    </tr>

                </thead>

                <tbody>

                    {pessoas.map((pessoa) => (

                        <tr key={pessoa.id}>

                            <td>{pessoa.nome}</td>

                            <td>{pessoa.idade}</td>

                            <td>

                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => excluirPessoa(pessoa.id)}
                                >

                                    Excluir

                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>
        </div>
    );

}

export default PessoaList;