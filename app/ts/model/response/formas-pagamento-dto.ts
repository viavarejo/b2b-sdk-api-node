import { FormasPagamento } from "./formas-pagamento.js";
import { Error } from "./error.js";

export class FormasPagamentoDTO {

    private data: FormasPagamento[];
    private error: Error;

    public getData(): FormasPagamento[] {
        return this.data;
    }

    public setData(data: FormasPagamento[]): void {
        this.data = data;
    }

    public getError(): Error {
        return this.error;
    }

    public setError(error: Error): void {
        this.error = error;
    }

}