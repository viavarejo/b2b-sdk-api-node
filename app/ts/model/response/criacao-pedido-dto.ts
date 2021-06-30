import { Error } from "./error.js";
import { CriacaoPedido } from "./criacao-pedido.js";

export class CriacaoPedidoDTO {
    private data: CriacaoPedido;
    private error: Error;

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