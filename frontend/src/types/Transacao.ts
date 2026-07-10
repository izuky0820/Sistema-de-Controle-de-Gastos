export enum TipoTransacao {
    Receita = 0,
    Despesa = 1
}

export interface Transacao {
    id: number;
    descricao: string;
    valor: number;
    tipo: TipoTransacao;
    pessoaId: number;
}