import { Produtos } from './produtos';
export class PedidoCarrinho {

    public idCampanha: number;
    public cnpj: string;
    public cep: string;
    public produtos: Produtos[];

    public getIdCampanha(): number {
        return this.idCampanha;
    }

    public setIdCampanha(idCampanha: number): void {
        this.idCampanha = idCampanha;
    }

    public getCnpj(): string {
        return this.cnpj;
    }

    public setCnpj(cnpj: string): void {
        this.cnpj = cnpj;
    }

    public getCep(): string {
        return this.cep;
    }

    public setCep(cep: string): void {
        this.cep = cep;
    }

    public getProdutos(): Produtos[] {
        return this.produtos;
    }

    public setProdutos(produtos: Produtos[]): void {
        this.produtos = produtos;
    }
}