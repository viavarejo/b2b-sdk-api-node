import { Campanha } from "./campanha";
import { Error } from "./error";

export class CampanhasDTO {

    public data: Campanha[];
    public error: Error;

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