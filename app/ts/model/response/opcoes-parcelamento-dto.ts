import { OpcaoParcelamento } from './opcao-parcelamento.js';
import { Error } from "./error.js";

export class OpcoesParcelamentoDTO {
    private data: OpcaoParcelamento[];
    private error: Error;

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