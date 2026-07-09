import type { Pessoa } from "../../types/Pessoa";
import {
    TipoTransacao,
    type Transacao
} from "../../types/Transacao";

/*
 * Propriedades recebidas pelo componente.
 */
interface TransacaoListProps {

    transacoes: Transacao[];

    pessoas: Pessoa[];

}

/*
 * Lista todas as transações cadastradas.
 */
function TransacaoList({
    transacoes,
    pessoas
}: TransacaoListProps) {

    /*
     * Procura o nome da pessoa pelo id.
     */
    function obterNomePessoa(id: number) {

        const pessoa = pessoas.find(
            p => p.id === id
        );

        return pessoa?.nome ?? "Pessoa não encontrada";

    }

    return (

        <div>

            <h2>Transações</h2>

            <table border={1}>

                <thead>

                    <tr>

                        <th>Descrição</th>

                        <th>Valor</th>

                        <th>Tipo</th>

                        <th>Pessoa</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        transacoes.map((transacao) => (

                            <tr key={transacao.id}>

                                <td>

                                    {transacao.descricao}

                                </td>

                                <td>

                                    R$ {transacao.valor.toFixed(2)}

                                </td>

                                <td>

                                    {
                                        transacao.tipo === TipoTransacao.Receita
                                            ? "Receita"
                                            : "Despesa"
                                    }

                                </td>

                                <td>

                                    {
                                        obterNomePessoa(
                                            transacao.pessoaId
                                        )
                                    }

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default TransacaoList;