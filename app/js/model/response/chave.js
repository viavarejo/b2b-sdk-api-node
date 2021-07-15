"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chave = void 0;
class Chave {
    getChavePublica() {
        return this.chavePublica;
    }
    setChavePublica(chavePublica) {
        this.chavePublica = chavePublica;
    }
    getDataCadastro() {
        return this.dataCadastro;
    }
    setDataCadastro(dataCadastro) {
        this.dataCadastro = dataCadastro;
    }
    getDataExpiracao() {
        return this.dataExpiracao;
    }
    setDataExpiracao(dataExpiracao) {
        this.dataExpiracao = dataExpiracao;
    }
    getDataAtualizacao() {
        return this.dataAtualizacao;
    }
    setDataAtualizacao(dataAtualizacao) {
        this.dataAtualizacao = dataAtualizacao;
    }
    isAtivo() {
        return this.ativo;
    }
    setAtivo(ativo) {
        this.ativo = ativo;
    }
}
exports.Chave = Chave;
