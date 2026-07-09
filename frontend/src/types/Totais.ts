export interface TotalPessoa {
    id: number;
    nome: string;
    receitas: number;
    despesas: number;
    saldo: number;
}

export interface ConsultaTotais {
    pessoas: TotalPessoa[];
    totalReceitas: number;
    totalDespesas: number;
    saldoGeral: number;
}