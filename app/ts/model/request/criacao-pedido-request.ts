import { PedidoProdutoDto } from "./pedido-produto-dto";
import { EnderecoEntregaDto } from "./endereco-entrega-dto";
import { DestinatarioDto } from "./destinatario-dto";
import { PagamentoComplementarDto } from "./pagamento-complementar-dto";
import { EntregaDadosDto } from "./entrega-dados-dto";
import { EnderecoCobrancaDto } from "./endereco-cobranca-dto";

export class CriacaoPedidoRequest {

    public produtos: PedidoProdutoDto[];
    public enderecoEntrega: EnderecoEntregaDto;
    public destinatario: DestinatarioDto;
    public pagtosComplementares: PagamentoComplementarDto[];
    public dadosEntrega: EntregaDadosDto;
    public enderecoCobranca: EnderecoCobrancaDto;
    public campanha: number;
    public cnpj: string;
    public pedidoParceiro: number;
    public idPedidoMktplc: string;
    public senhaAtendimento: string;
    public apolice: string;
    public administrador: number;
    public parametrosExtras: string;
    public valorFrete: number;
    public aguardarConfirmacao: boolean;
    public optantePeloSimples: boolean;
    public possuiPagtoComplementar: boolean;
    public valorTotalPedido: number;
    public valorTotalComplementar: number;
    public valorTotalComplementarComJuros: number;

    public getProdutos(): PedidoProdutoDto[] {
        return this.produtos;
    }

    public setProdutos(produtos: PedidoProdutoDto[]): void {
        this.produtos = produtos;
    }

    public getEnderecoEntrega(): EnderecoEntregaDto {
        return this.enderecoEntrega;
    }

    public setEnderecoEntrega(enderecoEntrega: EnderecoEntregaDto): void {
        this.enderecoEntrega = enderecoEntrega;
    }

    public getDestinatario(): DestinatarioDto {
        return this.destinatario;
    }

    public setDestinatario(destinatario: DestinatarioDto): void {
        this.destinatario = destinatario;
    }

    public getPagtosComplementares(): PagamentoComplementarDto[] {
        return this.pagtosComplementares;
    }

    public setPagtosComplementares(pagtosComplementares: PagamentoComplementarDto[]): void {
        this.pagtosComplementares = pagtosComplementares;
    }

    public getDadosEntrega(): EntregaDadosDto {
        return this.dadosEntrega;
    }

    public setDadosEntrega(dadosEntrega: EntregaDadosDto): void {
        this.dadosEntrega = dadosEntrega;
    }

    public getEnderecoCobranca(): EnderecoCobrancaDto {
        return this.enderecoCobranca;
    }

    public setEnderecoCobranca(enderecoCobranca: EnderecoCobrancaDto): void {
        this.enderecoCobranca = enderecoCobranca;
    }

    public getCampanha(): number {
        return this.campanha;
    }

    public setCampanha(campanha: number): void {
        this.campanha = campanha;
    }

    public getCnpj(): string {
        return this.cnpj;
    }

    public setCnpj(cnpj: string): void {
        this.cnpj = cnpj;
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

    public getSenhaAtendimento(): string {
        return this.senhaAtendimento;
    }

    public setSenhaAtendimento(senhaAtendimento: string): void {
        this.senhaAtendimento = senhaAtendimento;
    }

    public getApolice(): string {
        return this.apolice;
    }

    public setApolice(apolice: string): void {
        this.apolice = apolice;
    }

    public getAdministrador(): number {
        return this.administrador;
    }

    public setAdministrador(administrador: number): void {
        this.administrador = administrador;
    }

    public getParametrosExtras(): string {
        return this.parametrosExtras;
    }

    public setParametrosExtras(parametrosExtras: string): void {
        this.parametrosExtras = parametrosExtras;
    }

    public getValorFrete(): number {
        return this.valorFrete;
    }

    public setValorFrete(valorFrete: number): void {
        this.valorFrete = valorFrete;
    }

    public isAguardarConfirmacao(): boolean {
        return this.aguardarConfirmacao;
    }

    public setAguardarConfirmacao(aguardarConfirmacao: boolean): void {
        this.aguardarConfirmacao = aguardarConfirmacao;
    }

    public isOptantePeloSimples(): boolean {
        return this.optantePeloSimples;
    }

    public setOptantePeloSimples(optantePeloSimples: boolean): void {
        this.optantePeloSimples = optantePeloSimples;
    }

    public isPossuiPagtoComplementar(): boolean {
        return this.possuiPagtoComplementar;
    }

    public setPossuiPagtoComplementar(possuiPagtoComplementar: boolean): void {
        this.possuiPagtoComplementar = possuiPagtoComplementar;
    }

    public getValorTotalPedido(): number {
        return this.valorTotalPedido;
    }

    public setValorTotalPedido(valorTotalPedido: number): void {
        this.valorTotalPedido = valorTotalPedido;
    }

    public getValorTotalComplementar(): number {
        return this.valorTotalComplementar;
    }

    public setValorTotalComplementar(valorTotalComplementar: number): void {
        this.valorTotalComplementar = valorTotalComplementar;
    }

    public getValorTotalComplementarComJuros(): number {
        return this.valorTotalComplementarComJuros;
    }

    public setValorTotalComplementarComJuros(valorTotalComplementarComJuros: number): void {
        this.valorTotalComplementarComJuros = valorTotalComplementarComJuros;
    }

}