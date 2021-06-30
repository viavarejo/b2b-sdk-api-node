export class DadosPedidoHelper {
    private idPedido: number;
    private idPedidoParceiro: number;
    private idSku: number;
    private valorFrete: number;
    private precoVenda: number;

    public  getTotalPedido(): number{
        return this.valorFrete + this.precoVenda;
    }

    public getIdPedido(): number {
        return this.idPedido;
    }

    public setIdPedido(idPedido: number): void {
        this.idPedido = idPedido;
    }

    public getIdPedidoParceiro(): number {
        return this.idPedidoParceiro;
    }

    public setIdPedidoParceiro(idPedidoParceiro: number): void {
        this.idPedidoParceiro = idPedidoParceiro;
    }

    public getIdSku(): number {
        return this.idSku;
    }

    public setIdSku(idSku: number): void {
        this.idSku = idSku;
    }

    public getValorFrete(): number {
        return this.valorFrete;
    }

    public setValorFrete(valorFrete: number): void {
        this.valorFrete = valorFrete;
    }

    public getPrecoVenda(): number {
        return this.precoVenda;
    }

    public setPrecoVenda(precoVenda: number): void {
        this.precoVenda = precoVenda;
    }

}