import { ListaProdutos } from './lista-produtos';
import { Error } from "./error";

export class ProdutoDTO {

    public data: ListaProdutos;
    public error: Error;

    public getData(): ListaProdutos {
        return this.data;
    }

    public setData(data: ListaProdutos): void {
        this.data = data;
    }

    public getError(): Error {
        return this.error;
    }

    public setError(error: Error): void {
        this.error = error;
    }
}