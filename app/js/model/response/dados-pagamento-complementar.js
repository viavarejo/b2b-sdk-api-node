"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DadosPagamentoComplementar = void 0;
class DadosPagamentoComplementar {
    getPagamentos() {
        return this.pagamentos;
    }
    setPagamentos(pagamentos) {
        this.pagamentos = pagamentos;
    }
    getValorTotalComplementar() {
        return this.valorTotalComplementar;
    }
    setValorTotalComplementar(valorTotalComplementar) {
        this.valorTotalComplementar = valorTotalComplementar;
    }
    getValorTotalComplementarComJuros() {
        return this.valorTotalComplementarComJuros;
    }
    setValorTotalComplementarComJuros(valorTotalComplementarComJuros) {
        this.valorTotalComplementarComJuros = valorTotalComplementarComJuros;
    }
}
exports.DadosPagamentoComplementar = DadosPagamentoComplementar;
