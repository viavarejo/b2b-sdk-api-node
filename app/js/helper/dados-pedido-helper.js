"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DadosPedidoHelper = void 0;
class DadosPedidoHelper {
    getTotalPedido() {
        return this.valorFrete + this.precoVenda;
    }
    getIdPedido() {
        return this.idPedido;
    }
    setIdPedido(idPedido) {
        this.idPedido = idPedido;
    }
    getIdPedidoParceiro() {
        return this.idPedidoParceiro;
    }
    setIdPedidoParceiro(idPedidoParceiro) {
        this.idPedidoParceiro = idPedidoParceiro;
    }
    getIdSku() {
        return this.idSku;
    }
    setIdSku(idSku) {
        this.idSku = idSku;
    }
    getValorFrete() {
        return this.valorFrete;
    }
    setValorFrete(valorFrete) {
        this.valorFrete = valorFrete;
    }
    getPrecoVenda() {
        return this.precoVenda;
    }
    setPrecoVenda(precoVenda) {
        this.precoVenda = precoVenda;
    }
}
exports.DadosPedidoHelper = DadosPedidoHelper;
