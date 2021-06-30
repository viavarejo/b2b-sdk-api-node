import { Error } from "./error.js";
import { Carrinho } from "./carrinho.js";

export class CalculoCarrinho {

    private data: Carrinho;
    private error: Error;

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
