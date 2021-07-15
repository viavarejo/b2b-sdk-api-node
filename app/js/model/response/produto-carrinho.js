"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoCarrinho = void 0;
class ProdutoCarrinho {
    getIdSku() {
        return this.idSku;
    }
    setIdSku(idSku) {
        this.idSku = idSku;
    }
    getPrevisaoEntrega() {
        return this.previsaoEntrega;
    }
    setPrevisaoEntrega(previsaoEntrega) {
        this.previsaoEntrega = previsaoEntrega;
    }
    getValorUnitario() {
        return this.valorUnitario;
    }
    setValorUnitario(valorUnitario) {
        this.valorUnitario = valorUnitario;
    }
    getValorTotal() {
        return this.valorTotal;
    }
    setValorTotal(valorTotal) {
        this.valorTotal = valorTotal;
    }
    getValorTotalFrete() {
        return this.valorTotalFrete;
    }
    setValorTotalFrete(valorTotalFrete) {
        this.valorTotalFrete = valorTotalFrete;
    }
    getValorTotalImpostos() {
        return this.valorTotalImpostos;
    }
    setValorTotalImpostos(valorTotalImpostos) {
        this.valorTotalImpostos = valorTotalImpostos;
    }
    isErro() {
        return this.erro;
    }
    setErro(erro) {
        this.erro = erro;
    }
    getMensagemDeErro() {
        return this.mensagemDeErro;
    }
    setMensagemDeErro(mensagemDeErro) {
        this.mensagemDeErro = mensagemDeErro;
    }
    getCodigoDoErro() {
        return this.codigoDoErro;
    }
    setCodigoDoErro(codigoDoErro) {
        this.codigoDoErro = codigoDoErro;
    }
}
exports.ProdutoCarrinho = ProdutoCarrinho;
