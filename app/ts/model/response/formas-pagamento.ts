
export class FormasPagamento {

    public nome: string;
    public idFormaPagamento: number;

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getIdFormaPagamento(): number {
        return this.idFormaPagamento;
    }

    public setIdFormaPagamento(idFormaPagamento: number): void {
        this.idFormaPagamento = idFormaPagamento;
    }

}