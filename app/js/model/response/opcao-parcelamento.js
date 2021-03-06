"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpcaoParcelamento = void 0;
class OpcaoParcelamento {
    getIdFormaPagamento() {
        return this.idFormaPagamento;
    }
    setIdFormaPagamento(idFormaPagamento) {
        this.idFormaPagamento = idFormaPagamento;
    }
    getQuantidadeParcelas() {
        return this.quantidadeParcelas;
    }
    setQuantidadeParcelas(quantidadeParcelas) {
        this.quantidadeParcelas = quantidadeParcelas;
    }
    getTaxaJurosAoMes() {
        return this.taxaJurosAoMes;
    }
    setTaxaJurosAoMes(taxaJurosAoMes) {
        this.taxaJurosAoMes = taxaJurosAoMes;
    }
    getValorParcela() {
        return this.valorParcela;
    }
    setValorParcela(valorParcela) {
        this.valorParcela = valorParcela;
    }
    getValorTotal() {
        return this.valorTotal;
    }
    setValorTotal(valorTotal) {
        this.valorTotal = valorTotal;
    }
}
exports.OpcaoParcelamento = OpcaoParcelamento;
