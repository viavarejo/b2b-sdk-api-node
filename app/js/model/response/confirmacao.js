"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Confirmacao = void 0;
class Confirmacao {
    isPedidoConfirmado() {
        return this.pedidoConfirmado;
    }
    setPedidoConfirmado(pedidoConfirmado) {
        this.pedidoConfirmado = pedidoConfirmado;
    }
    isPedidoCancelado() {
        return this.pedidoCancelado;
    }
    setPedidoCancelado(pedidoCancelado) {
        this.pedidoCancelado = pedidoCancelado;
    }
}
exports.Confirmacao = Confirmacao;
