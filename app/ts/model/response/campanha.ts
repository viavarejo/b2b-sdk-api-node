import { EntregaTipo } from "./entrega-tipo.js";

export class Campanha {

    private idCampanha: number;
    private nome: string;
    private dataInicio: string;
    private dataFim: string;
    private idTipoCampanha: number;
    private tipoCampanha: string;
    private cnpjContrato: string;
    private status: boolean;
    private entregaTipos: EntregaTipo[];

    public getIdCampanha(): number {
        return this.idCampanha;
    }

    public setIdCampanha(idCampanha: number): void {
        this.idCampanha = idCampanha;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getDataInicio(): string {
        return this.dataInicio;
    }

    public setDataInicio(dataInicio: string): void {
        this.dataInicio = dataInicio;
    }

    public getDataFim(): string {
        return this.dataFim;
    }

    public setDataFim(dataFim: string): void {
        this.dataFim = dataFim;
    }

    public getIdTipoCampanha(): number {
        return this.idTipoCampanha;
    }

    public setIdTipoCampanha(idTipoCampanha: number): void {
        this.idTipoCampanha = idTipoCampanha;
    }

    public getTipoCampanha(): string {
        return this.tipoCampanha;
    }

    public setTipoCampanha(tipoCampanha: string): void {
        this.tipoCampanha = tipoCampanha;
    }

    public getCnpjContrato(): string {
        return this.cnpjContrato;
    }

    public setCnpjContrato(cnpjContrato: string): void {
        this.cnpjContrato = cnpjContrato;
    }

    public isStatus(): boolean {
        return this.status;
    }

    public setStatus(status: boolean): void {
        this.status = status;
    }

    public getEntregaTipos(): EntregaTipo[] {
        return this.entregaTipos;
    }

    public setEntregaTipos(entregaTipos: EntregaTipo[]): void {
        this.entregaTipos = entregaTipos;
    }

}