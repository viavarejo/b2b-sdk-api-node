import { Confirmacao } from "./confirmacao";
import { Error } from "./error";

export class ConfirmacaoDTO{
    private  data:Confirmacao;
	private  error:Error;

    public getData(): Confirmacao {
        return this.data;
    }

    public setData(data: Confirmacao): void {
        this.data = data;
    }

    public getError(): Error {
        return this.error;
    }

    public setError(error: Error): void {
        this.error = error;
    }

}