import { ListaProdutos } from './lista-produtos.js';

export class ProdutosDTO{
    private  data : ListaProdutos[];
    private  error : Error;

    public getData(): ListaProdutos[] {
        return this.data;
    }

    public setData(data: ListaProdutos[]): void {
        this.data = data;
    }

    public getError(): Error {
        return this.error;
    }

    public setError(error: Error): void {
        this.error = error;
    }
  
}