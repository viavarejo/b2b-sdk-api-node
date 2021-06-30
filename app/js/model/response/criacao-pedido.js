export class CriacaoPedido {
    getValorProduto() {
        return this.valorProduto;
    }
    setValorProduto(valorProduto) {
        this.valorProduto = valorProduto;
    }
    getValorTotalPedido() {
        return this.valorTotalPedido;
    }
    setValorTotalPedido(valorTotalPedido) {
        this.valorTotalPedido = valorTotalPedido;
    }
    getCodigoPedido() {
        return this.codigoPedido;
    }
    setCodigoPedido(codigoPedido) {
        this.codigoPedido = codigoPedido;
    }
    getPedidoParceiro() {
        return this.pedidoParceiro;
    }
    setPedidoParceiro(pedidoParceiro) {
        this.pedidoParceiro = pedidoParceiro;
    }
    getIdPedidoMktplc() {
        return this.idPedidoMktplc;
    }
    setIdPedidoMktplc(idPedidoMktplc) {
        this.idPedidoMktplc = idPedidoMktplc;
    }
    getProdutos() {
        return this.produtos;
    }
    setProdutos(produtos) {
        this.produtos = produtos;
    }
    getParametrosExtras() {
        return this.parametrosExtras;
    }
    setParametrosExtras(parametrosExtras) {
        this.parametrosExtras = parametrosExtras;
    }
    isAguardandoConfirmacao() {
        return this.aguardandoConfirmacao;
    }
    setAguardandoConfirmacao(aguardandoConfirmacao) {
        this.aguardandoConfirmacao = aguardandoConfirmacao;
    }
    getDadosEntrega() {
        return this.dadosEntrega;
    }
    setDadosEntrega(dadosEntrega) {
        this.dadosEntrega = dadosEntrega;
    }
    getDadosPagamentoComplementar() {
        return this.dadosPagamentoComplementar;
    }
    setDadosPagamentoComplementar(dadosPagamentoComplementar) {
        this.dadosPagamentoComplementar = dadosPagamentoComplementar;
    }
}
