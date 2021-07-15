"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmacaoReqDTO = void 0;
class ConfirmacaoReqDTO {
    getIdCampanha() {
        return this.idCampanha;
    }
    setIdCampanha(idCampanha) {
        this.idCampanha = idCampanha;
    }
    getIdPedidoParceiro() {
        return this.idPedidoParceiro;
    }
    setIdPedidoParceiro(idPedidoParceiro) {
        this.idPedidoParceiro = idPedidoParceiro;
    }
    isConfirmado() {
        return this.confirmado;
    }
    setConfirmado(confirmado) {
        this.confirmado = confirmado;
    }
    getIdPedidoMktplc() {
        return this.idPedidoMktplc;
    }
    setIdPedidoMktplc(idPedidoMktplc) {
        this.idPedidoMktplc = idPedidoMktplc;
    }
    isCancelado() {
        return this.cancelado;
    }
    setCancelado(cancelado) {
        this.cancelado = cancelado;
    }
    getMotivoCancelamento() {
        return this.motivoCancelamento;
    }
    setMotivoCancelamento(motivoCancelamento) {
        this.motivoCancelamento = motivoCancelamento;
    }
    getParceiro() {
        return this.parceiro;
    }
    setParceiro(parceiro) {
        this.parceiro = parceiro;
    }
}
exports.ConfirmacaoReqDTO = ConfirmacaoReqDTO;
