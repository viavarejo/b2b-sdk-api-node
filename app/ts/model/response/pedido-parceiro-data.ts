import { Error } from "./error";
import { PedidoParceiroDTO } from "./pedido-parceiro-dto";

export class PedidoParceiroData {
    public data: PedidoParceiroDTO;
    public error: Error;

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