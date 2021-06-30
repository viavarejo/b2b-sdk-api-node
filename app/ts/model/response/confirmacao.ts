export class Confirmacao {
    private pedidoConfirmado: boolean;
    private pedidoCancelado: boolean;

    public isPedidoConfirmado(): boolean {
        return this.pedidoConfirmado;
    }

    public setPedidoConfirmado(pedidoConfirmado: boolean): void {
        this.pedidoConfirmado = pedidoConfirmado;
    }

    public isPedidoCancelado(): boolean {
        return this.pedidoCancelado;
    }

    public setPedidoCancelado(pedidoCancelado: boolean): void {
        this.pedidoCancelado = pedidoCancelado;
    }

}