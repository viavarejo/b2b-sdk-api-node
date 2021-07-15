import { ProdutoCarrinho } from "./produto-carrinho";

export class Carrinho {
    public valorFrete: number;
    public valorImpostos: number;
    public valorTotaldosProdutos: number;
    public valorTotaldoPedido: number;
    public produtos: ProdutoCarrinho[];

    public getValorFrete(): number {
        return this.valorFrete;
    }

    public setValorFrete(valorFrete: number): void {
        this.valorFrete = valorFrete;
    }

    public getValorImpostos(): number {
        return this.valorImpostos;
    }

    public setValorImpostos(valorImpostos: number): void {
        this.valorImpostos = valorImpostos;
    }

    public getValorTotaldosProdutos(): number {
        return this.valorTotaldosProdutos;
    }

    public setValorTotaldosProdutos(valorTotaldosProdutos: number): void {
        this.valorTotaldosProdutos = valorTotaldosProdutos;
    }

    public getValorTotaldoPedido(): number {
        return this.valorTotaldoPedido;
    }

    public setValorTotaldoPedido(valorTotaldoPedido: number): void {
        this.valorTotaldoPedido = valorTotaldoPedido;
    }

    public getProdutos(): ProdutoCarrinho[] {
        return this.produtos;
    }

    public setProdutos(produtos: ProdutoCarrinho[]): void {
        this.produtos = produtos;
    }

}