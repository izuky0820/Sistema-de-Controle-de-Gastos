/*
 * Representa o resumo financeiro de uma pessoa.
 */
export interface TotalPessoa {

    id: number;

    nome: string;

    receitas: number;

    despesas: number;

    saldo: number;

}

/*
 * Representa a resposta completa
 * retornada pelo endpoint ConsultaTotais.
 */
export interface Totais {

    pessoas: TotalPessoa[];

    totalReceitas: number;

    totalDespesas: number;

    saldoGeral: number;

}