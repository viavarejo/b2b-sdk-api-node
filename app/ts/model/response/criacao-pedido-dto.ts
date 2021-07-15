import { Error } from "./error";
import { CriacaoPedido } from "./criacao-pedido";

export class CriacaoPedidoDTO {
    public data: CriacaoPedido;
    public error: Error;

    public getData(): CriacaoPedido {
        return this.data;
    }

    public setData(data: CriacaoPedido): void {
        this.data = data;
    }

    public getError(): Error {
        return this.error;
    }

    public setError(error: Error): void {
        this.error = error;
    }

}