import { Frete } from "./frete.js";

export class ProdutoDadosEntrega{
    private  idEntregaTipo : number;
    private disponibilidade : boolean;
    private fretes :  Frete[]; 

    public getIdEntregaTipo(): number {
        return this.idEntregaTipo;
    }

    public setIdEntregaTipo(idEntregaTipo: number): void {
        this.idEntregaTipo = idEntregaTipo;
    }

    public isDisponibilidade(): boolean {
        return this.disponibilidade;
    }

    public setDisponibilidade(disponibilidade: boolean): void {
        this.disponibilidade = disponibilidade;
    }

    public getFretes(): Frete[] {
        return this.fretes;
    }

    public setFretes(fretes: Frete[]): void {
        this.fretes = fretes;
    }
  
}