
export class Produtos {
    public codigo: number;
    public quantidade: number;
    public idLojista: number;

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

    public getIdLojista(): number {
        return this.idLojista;
    }

    public setIdLojista(idLojista: number): void {
        this.idLojista = idLojista;
    }

}