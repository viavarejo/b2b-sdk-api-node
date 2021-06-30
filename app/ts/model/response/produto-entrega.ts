export class ProdutoEntrega {

    private codigo: number;
    private nome: string;
    private quantidade: number;
    private valor: number;
    private frete: number;
    private valorAdicional: number;
    private valorTotal: number;
    private idLojista: number;

    public getCodigo(): number {
        return this.codigo;
    }

    public setCodigo(codigo: number): void {
        this.codigo = codigo;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getQuantidade(): number {
        return this.quantidade;
    }

    public setQuantidade(quantidade: number): void {
        this.quantidade = quantidade;
    }

    public getValor(): number {
        return this.valor;
    }

    public setValor(valor: number): void {
        this.valor = valor;
    }

    public getFrete(): number {
        return this.frete;
    }

    public setFrete(frete: number): void {
        this.frete = frete;
    }

    public getValorAdicional(): number {
        return this.valorAdicional;
    }

    public setValorAdicional(valorAdicional: number): void {
        this.valorAdicional = valorAdicional;
    }

    public getValorTotal(): number {
        return this.valorTotal;
    }

    public setValorTotal(valorTotal: number): void {
        this.valorTotal = valorTotal;
    }

    public getIdLojista(): number {
        return this.idLojista;
    }

    public setIdLojista(idLojista: number): void {
        this.idLojista = idLojista;
    }
}