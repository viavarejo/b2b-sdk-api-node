
export class ConfirmacaoReqDTO {

    public idCampanha: number;
    public idPedidoParceiro: number;
    public confirmado: boolean;
    public idPedidoMktplc: string;
    public cancelado: boolean;
    public motivoCancelamento: string;
    public parceiro: string;

    public getIdCampanha(): number {
        return this.idCampanha;
    }

    public setIdCampanha(idCampanha: number): void {
        this.idCampanha = idCampanha;
    }

    public getIdPedidoParceiro(): number {
        return this.idPedidoParceiro;
    }

    public setIdPedidoParceiro(idPedidoParceiro: number): void {
        this.idPedidoParceiro = idPedidoParceiro;
    }

    public isConfirmado(): boolean {
        return this.confirmado;
    }

    public setConfirmado(confirmado: boolean): void {
        this.confirmado = confirmado;
    }

    public getIdPedidoMktplc(): string {
        return this.idPedidoMktplc;
    }

    public setIdPedidoMktplc(idPedidoMktplc: string): void {
        this.idPedidoMktplc = idPedidoMktplc;
    }

    public isCancelado(): boolean {
        return this.cancelado;
    }

    public setCancelado(cancelado: boolean): void {
        this.cancelado = cancelado;
    }

    public getMotivoCancelamento(): string {
        return this.motivoCancelamento;
    }

    public setMotivoCancelamento(motivoCancelamento: string): void {
        this.motivoCancelamento = motivoCancelamento;
    }

    public getParceiro(): string {
        return this.parceiro;
    }

    public setParceiro(parceiro: string): void {
        this.parceiro = parceiro;
    }

}