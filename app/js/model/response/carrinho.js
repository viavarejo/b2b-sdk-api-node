export class Carrinho {
    getValorFrete() {
        return this.valorFrete;
    }
    setValorFrete(valorFrete) {
        this.valorFrete = valorFrete;
    }
    getValorImpostos() {
        return this.valorImpostos;
    }
    setValorImpostos(valorImpostos) {
        this.valorImpostos = valorImpostos;
    }
    getValorTotaldosProdutos() {
        return this.valorTotaldosProdutos;
    }
    setValorTotaldosProdutos(valorTotaldosProdutos) {
        this.valorTotaldosProdutos = valorTotaldosProdutos;
    }
    getValorTotaldoPedido() {
        return this.valorTotaldoPedido;
    }
    setValorTotaldoPedido(valorTotaldoPedido) {
        this.valorTotaldoPedido = valorTotaldoPedido;
    }
    getProdutos() {
        return this.produtos;
    }
    setProdutos(produtos) {
        this.produtos = produtos;
    }
}
