"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carrinho = void 0;
class Carrinho {
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
exports.Carrinho = Carrinho;
