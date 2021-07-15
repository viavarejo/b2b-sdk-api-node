
export class ProdutoCarrinho {
    public idSku: number;
    public previsaoEntrega: string;
    public valorUnitario: number;
    public valorTotal: number;
    public valorTotalFrete: number;
    public valorTotalImpostos: number;
    public erro: boolean;
    public mensagemDeErro: string;
    public codigoDoErro: string;

    public getIdSku(): number {
        return this.idSku;
    }

    public setIdSku(idSku: number): void {
        this.idSku = idSku;
    }

    public getPrevisaoEntrega(): string {
        return this.previsaoEntrega;
    }

    public setPrevisaoEntrega(previsaoEntrega: string): void {
        this.previsaoEntrega = previsaoEntrega;
    }

    public getValorUnitario(): number {
        return this.valorUnitario;
    }

    public setValorUnitario(valorUnitario: number): void {
        this.valorUnitario = valorUnitario;
    }

    public getValorTotal(): number {
        return this.valorTotal;
    }

    public setValorTotal(valorTotal: number): void {
        this.valorTotal = valorTotal;
    }

    public getValorTotalFrete(): number {
        return this.valorTotalFrete;
    }

    public setValorTotalFrete(valorTotalFrete: number): void {
        this.valorTotalFrete = valorTotalFrete;
    }

    public getValorTotalImpostos(): number {
        return this.valorTotalImpostos;
    }

    public setValorTotalImpostos(valorTotalImpostos: number): void {
        this.valorTotalImpostos = valorTotalImpostos;
    }

    public isErro(): boolean {
        return this.erro;
    }

    public setErro(erro: boolean): void {
        this.erro = erro;
    }

    public getMensagemDeErro(): string {
        return this.mensagemDeErro;
    }

    public setMensagemDeErro(mensagemDeErro: string): void {
        this.mensagemDeErro = mensagemDeErro;
    }

    public getCodigoDoErro(): string {
        return this.codigoDoErro;
    }

    public setCodigoDoErro(codigoDoErro: string): void {
        this.codigoDoErro = codigoDoErro;
    }


}