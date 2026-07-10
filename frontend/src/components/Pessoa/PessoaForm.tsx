import { useState } from "react";
import { api } from "../../services/api";

/*
 * Interface que define as propriedades recebidas pelo componente.
 *
 * Após cadastrar uma pessoa com sucesso, chamaremos essa função
 * para atualizar a lista exibida na tela.
 */
interface PessoaFormProps {
    atualizarLista: () => void;
}

/*
 * Componente responsável pelo cadastro de pessoas.
 *
 * Sua única responsabilidade é:
 * - Capturar os dados do formulário;
 * - Enviar um POST para a API;
 * - Solicitar a atualização da lista.
 */
function PessoaForm({ atualizarLista }: PessoaFormProps) {

    // Armazena temporariamente o nome digitado.
    const [nome, setNome] = useState("");

    // Armazena temporariamente a idade digitada.
    const [idade, setIdade] = useState(0);

    /*
     * Envia uma nova pessoa para o backend.
     */
    async function cadastrarPessoa() {

        try {

            await api.post("/pessoas", {
                nome,
                idade
            });

            // Limpa os campos após o cadastro.
            setNome("");
            setIdade(0);

            // Atualiza a lista exibida.
            atualizarLista();

        }
        catch (erro) {

            console.error("Erro ao cadastrar pessoa.", erro);

            alert("Não foi possível cadastrar a pessoa.");

        }

    }

    return (

        <div className="mb-3">

            <div className="mb-3">

                <label className="form-label">

                    Nome

                </label>

                <input
                    className="form-control"
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />

            </div>

            <div className="mb-3">

                <label className="form-label">

                    Idade

                </label>

                <input
                    className="form-control"
                    type="number"
                    value={idade}
                    onChange={(e) => setIdade(Number(e.target.value))}
                />

            </div>

            <button
                className="btn btn-primary"
                onClick={cadastrarPessoa}
            >

                Cadastrar

            </button>

        </div>



    );

}

export default PessoaForm;