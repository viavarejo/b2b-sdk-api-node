export class Confirmacao {
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
