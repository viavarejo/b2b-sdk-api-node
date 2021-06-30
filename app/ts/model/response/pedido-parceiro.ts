export class PedidoParceiro {
    private codigoPedido: number;
    private dataHora: string;
    private idPedidoMktplc: number;
    private pedidoParceiro: number;
    private urlBoleto: string;
    private valorAdicional: number;
    private valorFrete: number;
    private valorProduto: number;
    private valorTotalPedido: number;

    public getCodigoPedido(): number {
        return this.codigoPedido;
    }

    public setCodigoPedido(codigoPedido: number): void {
        this.codigoPedido = codigoPedido;
    }

    public getDataHora(): string {
        return this.dataHora;
    }

    public setDataHora(dataHora: string): void {
        this.dataHora = dataHora;
    }

    public getIdPedidoMktplc(): number {
        return this.idPedidoMktplc;
    }

    public setIdPedidoMktplc(idPedidoMktplc: number): void {
        this.idPedidoMktplc = idPedidoMktplc;
    }

    public getPedidoParceiro(): number {
        return this.pedidoParceiro;
    }

    public setPedidoParceiro(pedidoParceiro: number): void {
        this.pedidoParceiro = pedidoParceiro;
    }

    public getUrlBoleto(): string {
        return this.urlBoleto;
    }

    public setUrlBoleto(urlBoleto: string): void {
        this.urlBoleto = urlBoleto;
    }

    public getValorAdicional(): number {
        return this.valorAdicional;
    }

    public setValorAdicional(valorAdicional: number): void {
        this.valorAdicional = valorAdicional;
    }

    public getValorFrete(): number {
        return this.valorFrete;
    }

    public setValorFrete(valorFrete: number): void {
        this.valorFrete = valorFrete;
    }

    public getValorProduto(): number {
        return this.valorProduto;
    }

    public setValorProduto(valorProduto: number): void {
        this.valorProduto = valorProduto;
    }

    public getValorTotalPedido(): number {
        return this.valorTotalPedido;
    }

    public setValorTotalPedido(valorTotalPedido: number): void {
        this.valorTotalPedido = valorTotalPedido;
    }

}