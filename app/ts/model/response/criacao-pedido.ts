import { Produto } from "./produto";
import { DadosEntrega } from "./dados-entrega";
import { DadosPagamentoComplementar } from "./dados-pagamento-complementar";

export class CriacaoPedido {
    public valorProduto: number;
    public valorTotalPedido: number;
    public codigoPedido: number;
    public pedidoParceiro: number;
    public idPedidoMktplc: string;
    public produtos: Produto[];
    public parametrosExtras: string;
    public aguardandoConfirmacao: boolean;
    public dadosEntrega: DadosEntrega;
    public dadosPagamentoComplementar: DadosPagamentoComplementar;

    public getValorProduto(): number {
        return this.valorProduto;
    }

    public setValorProduto(valorProduto: number): void {
        this.valorProduto = valorProduto;
    }

    public getValorTotalPedido(): number {
        return this.valorTotalPedido;
    }

    public setValorTotalPedido(valorTotalPedido: number): void {
        this.valorTotalPedido = valorTotalPedido;
    }

    public getCodigoPedido(): number {
        return this.codigoPedido;
    }

    public setCodigoPedido(codigoPedido: number): void {
        this.codigoPedido = codigoPedido;
    }

    public getPedidoParceiro(): number {
        return this.pedidoParceiro;
    }

    public setPedidoParceiro(pedidoParceiro: number): void {
        this.pedidoParceiro = pedidoParceiro;
    }

    public getIdPedidoMktplc(): string {
        return this.idPedidoMktplc;
    }

    public setIdPedidoMktplc(idPedidoMktplc: string): void {
        this.idPedidoMktplc = idPedidoMktplc;
    }

    public getProdutos(): Produto[] {
        return this.produtos;
    }

    public setProdutos(produtos: Produto[]): void {
        this.produtos = produtos;
    }

    public getParametrosExtras(): string {
        return this.parametrosExtras;
    }

    public setParametrosExtras(parametrosExtras: string): void {
        this.parametrosExtras = parametrosExtras;
    }

    public isAguardandoConfirmacao(): boolean {
        return this.aguardandoConfirmacao;
    }

    public setAguardandoConfirmacao(aguardandoConfirmacao: boolean): void {
        this.aguardandoConfirmacao = aguardandoConfirmacao;
    }

    public getDadosEntrega(): DadosEntrega {
        return this.dadosEntrega;
    }

    public setDadosEntrega(dadosEntrega: DadosEntrega): void {
        this.dadosEntrega = dadosEntrega;
    }

    public getDadosPagamentoComplementar(): DadosPagamentoComplementar {
        return this.dadosPagamentoComplementar;
    }

    public setDadosPagamentoComplementar(dadosPagamentoComplementar: DadosPagamentoComplementar): void {
        this.dadosPagamentoComplementar = dadosPagamentoComplementar;
    }

}