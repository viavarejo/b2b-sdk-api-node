"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    getIdLojista() {
        return this.idLojista;
    }
    setIdLojista(idLojista) {
        this.idLojista = idLojista;
    }
    getCodigo() {
        return this.codigo;
    }
    setCodigo(codigo) {
        this.codigo = codigo;
    }
    getQuantidade() {
        return this.quantidade;
    }
    setQuantidade(quantidade) {
        this.quantidade = quantidade;
    }
    getPremio() {
        return this.premio;
    }
    setPremio(premio) {
        this.premio = premio;
    }
    getPrecoVenda() {
        return this.precoVenda;
    }
    setPrecoVenda(precoVenda) {
        this.precoVenda = precoVenda;
    }
}
exports.Produto = Produto;
