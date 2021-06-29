import { Campanha } from "./campanha.js";
import { Error } from "./error.js";

export class CampanhasDTO {

    private data: Campanha[];
    private error: Error;

    public getData(): Campanha[] {
        return this.data;
    }

    public setData(data: Campanha[]): void {
        this.data = data;
    }

    public getError(): Error {
        return this.error;
    }

    public setError(error: Error): void {
        this.error = error;
    }

}