
export class OpcaoParcelamento {
    private idFormaPagamento: number;
    private quantidadeParcelas: number;
    private taxaJurosAoMes: number;
    private valorParcela: number;
    private valorTotal: number;

    public getIdFormaPagamento(): number {
        return this.idFormaPagamento;
    }

    public setIdFormaPagamento(idFormaPagamento: number): void {
        this.idFormaPagamento = idFormaPagamento;
    }

    public getQuantidadeParcelas(): number {
        return this.quantidadeParcelas;
    }

    public setQuantidadeParcelas(quantidadeParcelas: number): void {
        this.quantidadeParcelas = quantidadeParcelas;
    }

    public getTaxaJurosAoMes(): number {
        return this.taxaJurosAoMes;
    }

    public setTaxaJurosAoMes(taxaJurosAoMes: number): void {
        this.taxaJurosAoMes = taxaJurosAoMes;
    }

    public getValorParcela(): number {
        return this.valorParcela;
    }

    public setValorParcela(valorParcela: number): void {
        this.valorParcela = valorParcela;
    }

    public getValorTotal(): number {
        return this.valorTotal;
    }

    public setValorTotal(valorTotal: number): void {
        this.valorTotal = valorTotal;
    }

}