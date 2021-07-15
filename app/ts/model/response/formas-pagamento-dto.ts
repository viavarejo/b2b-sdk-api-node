import { FormasPagamento } from "./formas-pagamento";
import { Error } from "./error";

export class FormasPagamentoDTO {

    public data: FormasPagamento[];
    public error: Error;

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