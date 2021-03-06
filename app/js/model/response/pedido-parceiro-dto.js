"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoParceiroDTO = void 0;
class PedidoParceiroDTO {
    getPedido() {
        return this.pedido;
    }
    setPedido(pedido) {
        this.pedido = pedido;
    }
    getEndereco() {
        return this.endereco;
    }
    setEndereco(endereco) {
        this.endereco = endereco;
    }
    getDestinatario() {
        return this.destinatario;
    }
    setDestinatario(destinatario) {
        this.destinatario = destinatario;
    }
    getEntregas() {
        return this.entregas;
    }
    setEntregas(entregas) {
        this.entregas = entregas;
    }
}
exports.PedidoParceiroDTO = PedidoParceiroDTO;
