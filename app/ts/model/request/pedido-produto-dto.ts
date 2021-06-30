export class PedidoProdutoDto {
    private idLojista: number;
    private codigo: number;
    private quantidade: number;
    private premio: number;
    private precoVenda: number;

    public getIdLojista(): number {
        return this.idLojista;
    }

    public setIdLojista(idLojista: number): void {
        this.idLojista = idLojista;
    }

    public getCodigo(): number {
        return this.codigo;
    }

    public setCodigo(codigo: number): void {
        this.codigo = codigo;
    }

    public getQuantidade(): number {
        return this.quantidade;
    }

    public setQuantidade(quantidade: number): void {
        this.quantidade = quantidade;
    }

    public getPremio(): number {
        return this.premio;
    }

    public setPremio(premio: number): void {
        this.premio = premio;
    }

    public getPrecoVenda(): number {
        return this.precoVenda;
    }

    public setPrecoVenda(precoVenda: number): void {
        this.precoVenda = precoVenda;
    }

}