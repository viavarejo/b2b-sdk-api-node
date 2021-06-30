import { PedidoProdutoDto } from "./pedido-produto-dto.js";
import { EnderecoEntregaDto } from "./endereco-entrega-dto.js";
import { DestinatarioDto } from "./destinatario-dto.js";
import { PagamentoComplementarDto } from "./pagamento-complementar-dto.js";
import { EntregaDadosDto } from "./entrega-dados-dto.js";
import { EnderecoCobrancaDto } from "./endereco-cobranca-dto.js";

export class CriacaoPedidoRequest {

    private produtos: PedidoProdutoDto[];
    private enderecoEntrega: EnderecoEntregaDto;
    private destinatario: DestinatarioDto;
    private pagtosComplementares: PagamentoComplementarDto[];
    private dadosEntrega: EntregaDadosDto;
    private enderecoCobranca: EnderecoCobrancaDto;
    private campanha: number;
    private cnpj: string;
    private pedidoParceiro: number;
    private idPedidoMktplc: string;
    private senhaAtendimento: string;
    private apolice: string;
    private administrador: number;
    private parametrosExtras: string;
    private valorFrete: number;
    private aguardarConfirmacao: boolean;
    private optantePeloSimples: boolean;
    private possuiPagtoComplementar: boolean;
    private valorTotalPedido: number;
    private valorTotalComplementar: number;
    private valorTotalComplementarComJuros: number;

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