import { OpcaoParcelamento } from './opcao-parcelamento';
import { Error } from "./error";

export class OpcoesParcelamentoDTO {
    public data: OpcaoParcelamento[];
    public error: Error;

    public getData(): OpcaoParcelamento[] {
        return this.data;
    }

    public setData(data: OpcaoParcelamento[]): void {
        this.data = data;
    }

    public getError(): Error {
        return this.error;
    }

    public setError(error: Error): void {
        this.error = error;
    }

}