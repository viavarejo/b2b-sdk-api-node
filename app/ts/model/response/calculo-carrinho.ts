import { Error } from "./error";
import { Carrinho } from "./carrinho";

export class CalculoCarrinho {

    public data: Carrinho;
    public error: Error;

    public getData(): Carrinho {
        return this.data;
    }

    public setData(data: Carrinho): void {
        this.data = data;
    }

    public getError(): Error {
        return this.error;
    }

    public setError(error: Error): void {
        this.error = error;
    }

}
