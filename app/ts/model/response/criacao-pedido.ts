import { Produto } from "./produto.js";
import { DadosEntrega } from "./dados-entrega.js";
import { DadosPagamentoComplementar } from "./dados-pagamento-complementar.js";

export class CriacaoPedido {
    private valorProduto: number;
    private valorTotalPedido: number;
    private codigoPedido: number;
    private pedidoParceiro: number;
    private idPedidoMktplc: string;
    private produtos: Produto[];
    private parametrosExtras: string;
    private aguardandoConfirmacao: boolean;
    private dadosEntrega: DadosEntrega;
    private dadosPagamentoComplementar: DadosPagamentoComplementar;

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