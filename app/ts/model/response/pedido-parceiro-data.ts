import { Error } from "./error.js";
import { PedidoParceiroDTO } from "./pedido-parceiro-dto.js";

export class PedidoParceiroData {
    private data: PedidoParceiroDTO;
    private error: Error;

    public getData(): PedidoParceiroDTO {
        return this.data;
    }

    public setData(data: PedidoParceiroDTO): void {
        this.data = data;
    }

    public getError(): Error {
        return this.error;
    }

    public setError(error: Error): void {
        this.error = error;
    }

}