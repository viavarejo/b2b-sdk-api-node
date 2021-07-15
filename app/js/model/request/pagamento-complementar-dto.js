"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagamentoComplementarDto = void 0;
class PagamentoComplementarDto {
    getIdFormaPagamento() {
        return this.idFormaPagamento;
    }
    setIdFormaPagamento(idFormaPagamento) {
        this.idFormaPagamento = idFormaPagamento;
    }
    getDadosCartaoCredito() {
        return this.dadosCartaoCredito;
    }
    setDadosCartaoCredito(dadosCartaoCredito) {
        this.dadosCartaoCredito = dadosCartaoCredito;
    }
    getDadosCartaoCreditoValidacao() {
        return this.dadosCartaoCreditoValidacao;
    }
    setDadosCartaoCreditoValidacao(dadosCartaoCreditoValidacao) {
        this.dadosCartaoCreditoValidacao = dadosCartaoCreditoValidacao;
    }
    getValorComplementarComJuros() {
        return this.valorComplementarComJuros;
    }
    setValorComplementarComJuros(valorComplementarComJuros) {
        this.valorComplementarComJuros = valorComplementarComJuros;
    }
    getValorComplementar() {
        return this.valorComplementar;
    }
    setValorComplementar(valorComplementar) {
        this.valorComplementar = valorComplementar;
    }
}
exports.PagamentoComplementarDto = PagamentoComplementarDto;
