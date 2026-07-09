import { useEffect, useState } from "react";
import { api } from "../services/api";
import type { Totais } from "../types/Totais";

/*
 * Página responsável por consultar
 * os totais financeiros do sistema.
 */
function TotaisPage() {

    /*
     * Estado que armazenará a resposta
     * da API.
     */
    const [totais, setTotais] = useState<Totais | null>(null);

    /*
     * Consulta os totais ao abrir a página.
     */
    useEffect(() => {

        carregarTotais();

    }, []);

    /*
     * Consome o endpoint da API.
     */
    async function carregarTotais() {

        try {

            const resposta = await api.get("/ConsultaTotais");

            setTotais(resposta.data);

        }

        catch (erro) {

            console.error("Erro ao consultar totais.", erro);

        }

    }

    /*
     * Enquanto os dados são carregados,
     * exibe uma mensagem ao usuário.
     */
    if (!totais) {

        return <p>Carregando...</p>;

    }

    return (

        <div>

            <h2>Consulta de Totais</h2>

            <table border={1}>

                <thead>

                    <tr>

                        <th>Pessoa</th>

                        <th>Receitas</th>

                        <th>Despesas</th>

                        <th>Saldo</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        totais.pessoas.map((pessoa) => (

                            <tr key={pessoa.id}>

                                <td>{pessoa.nome}</td>

                                <td>
                                    R$ {pessoa.receitas.toFixed(2)}
                                </td>

                                <td>
                                    R$ {pessoa.despesas.toFixed(2)}
                                </td>

                                <td>
                                    R$ {pessoa.saldo.toFixed(2)}
                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

            <hr />

            <h3>Totais Gerais</h3>

            <p>

                <strong>Total de Receitas:</strong>

                {" "}

                R$ {totais.totalReceitas.toFixed(2)}

            </p>

            <p>

                <strong>Total de Despesas:</strong>

                {" "}

                R$ {totais.totalDespesas.toFixed(2)}

            </p>

            <p>

                <strong>Saldo Geral:</strong>

                {" "}

                R$ {totais.saldoGeral.toFixed(2)}

            </p>

        </div>

    );

}

export default TotaisPage;