import { Error } from "./error.js";
import { Chave } from "./chave.js";

export class ChaveDTO {
    private data: Chave;
    private error: Error;

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