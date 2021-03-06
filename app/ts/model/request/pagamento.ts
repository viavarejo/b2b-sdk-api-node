export class Pagamento {
    public codigoDoErro: string;
    public valorComplementar: number;
    public quantidadeParcelas: number;
    public valorParcela: number;
    public idFormaPagamento: number;
    public erro: boolean;
    public mensagemDeErro: string;
    public url: string;

    public getCodigoDoErro(): string {
        return this.codigoDoErro;
    }

    public setCodigoDoErro(codigoDoErro: string): void {
        this.codigoDoErro = codigoDoErro;
    }

    public getValorComplementar(): number {
        return this.valorComplementar;
    }

    public setValorComplementar(valorComplementar: number): void {
        this.valorComplementar = valorComplementar;
    }

    public getQuantidadeParcelas(): number {
        return this.quantidadeParcelas;
    }

    public setQuantidadeParcelas(quantidadeParcelas: number): void {
        this.quantidadeParcelas = quantidadeParcelas;
    }

    public getValorParcela(): number {
        return this.valorParcela;
    }

    public setValorParcela(valorParcela: number): void {
        this.valorParcela = valorParcela;
    }

    public getIdFormaPagamento(): number {
        return this.idFormaPagamento;
    }

    public setIdFormaPagamento(idFormaPagamento: number): void {
        this.idFormaPagamento = idFormaPagamento;
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

    public getUrl(): string {
        return this.url;
    }

    public setUrl(url: string): void {
        this.url = url;
    }

}