export enum TipoTransacao {
    Despesa = 0,
    Receita = 1
}

export interface Transacao {
    id: number;
    descricao: string;
    valor: number;
    tipo: TipoTransacao;
    pessoaId: number;
}