import { TrackingEntrega } from "./tracking-entrega.js";
import { ProdutoEntrega } from "./produto-entrega.js";
import { Motivo } from "./motivo.js";

export class Entrega {
    private codigoEntrega: number;
    private previsaoEntrega: string;
    private dataEntrega: string;
    private dataPrevisao: string;
    private dataEmissaoNotaFiscal: string;
    private idNotaFiscal: number;
    private serieNotaFiscal: string;
    private chaveAcesso: string;
    private trackingEntrega: TrackingEntrega[];
    private produtoEntrega: ProdutoEntrega[];
    private rastreioEntrega: string;
    private nomeTransportadora: string;
    private linkNotaFiscalPDF: string;
    private listNotaFiscalXML: string;
    private estorno: boolean;
    private origem: string;
    private motivo: Motivo;

    public getCodigoEntrega(): number {
        return this.codigoEntrega;
    }

    public setCodigoEntrega(codigoEntrega: number): void {
        this.codigoEntrega = codigoEntrega;
    }

    public getPrevisaoEntrega(): string {
        return this.previsaoEntrega;
    }

    public setPrevisaoEntrega(previsaoEntrega: string): void {
        this.previsaoEntrega = previsaoEntrega;
    }

    public getDataEntrega(): string {
        return this.dataEntrega;
    }

    public setDataEntrega(dataEntrega: string): void {
        this.dataEntrega = dataEntrega;
    }

    public getDataPrevisao(): string {
        return this.dataPrevisao;
    }

    public setDataPrevisao(dataPrevisao: string): void {
        this.dataPrevisao = dataPrevisao;
    }

    public getDataEmissaoNotaFiscal(): string {
        return this.dataEmissaoNotaFiscal;
    }

    public setDataEmissaoNotaFiscal(dataEmissaoNotaFiscal: string): void {
        this.dataEmissaoNotaFiscal = dataEmissaoNotaFiscal;
    }

    public getIdNotaFiscal(): number {
        return this.idNotaFiscal;
    }

    public setIdNotaFiscal(idNotaFiscal: number): void {
        this.idNotaFiscal = idNotaFiscal;
    }

    public getSerieNotaFiscal(): string {
        return this.serieNotaFiscal;
    }

    public setSerieNotaFiscal(serieNotaFiscal: string): void {
        this.serieNotaFiscal = serieNotaFiscal;
    }

    public getChaveAcesso(): string {
        return this.chaveAcesso;
    }

    public setChaveAcesso(chaveAcesso: string): void {
        this.chaveAcesso = chaveAcesso;
    }

    public getTrackingEntrega(): TrackingEntrega[] {
        return this.trackingEntrega;
    }

    public setTrackingEntrega(trackingEntrega: TrackingEntrega[]): void {
        this.trackingEntrega = trackingEntrega;
    }

    public getProdutoEntrega(): ProdutoEntrega[] {
        return this.produtoEntrega;
    }

    public setProdutoEntrega(produtoEntrega: ProdutoEntrega[]): void {
        this.produtoEntrega = produtoEntrega;
    }

    public getRastreioEntrega(): string {
        return this.rastreioEntrega;
    }

    public setRastreioEntrega(rastreioEntrega: string): void {
        this.rastreioEntrega = rastreioEntrega;
    }

    public getNomeTransportadora(): string {
        return this.nomeTransportadora;
    }

    public setNomeTransportadora(nomeTransportadora: string): void {
        this.nomeTransportadora = nomeTransportadora;
    }

    public getLinkNotaFiscalPDF(): string {
        return this.linkNotaFiscalPDF;
    }

    public setLinkNotaFiscalPDF(linkNotaFiscalPDF: string): void {
        this.linkNotaFiscalPDF = linkNotaFiscalPDF;
    }

    public getListNotaFiscalXML(): string {
        return this.listNotaFiscalXML;
    }

    public setListNotaFiscalXML(listNotaFiscalXML: string): void {
        this.listNotaFiscalXML = listNotaFiscalXML;
    }

    public isEstorno(): boolean {
        return this.estorno;
    }

    public setEstorno(estorno: boolean): void {
        this.estorno = estorno;
    }

    public getOrigem(): string {
        return this.origem;
    }

    public setOrigem(origem: string): void {
        this.origem = origem;
    }

    public getMotivo(): Motivo {
        return this.motivo;
    }

    public setMotivo(motivo: Motivo): void {
        this.motivo = motivo;
    }

}