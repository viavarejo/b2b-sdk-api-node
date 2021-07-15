import { Error } from "./error";
import { Chave } from "./chave";

export class ChaveDTO {
    public data: Chave;
    public error: Error;

    public getData(): Chave {
        return this.data;
    }

    public setData(data: Chave): void {
        this.data = data;
    }

    public getError(): Error {
        return this.error;
    }

    public setError(error: Error): void {
        this.error = error;
    }

}