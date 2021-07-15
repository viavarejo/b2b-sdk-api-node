"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Destinatario = void 0;
class Destinatario {
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getCpfCnpj() {
        return this.cpfCnpj;
    }
    setCpfCnpj(cpfCnpj) {
        this.cpfCnpj = cpfCnpj;
    }
    getInscricaoEstadual() {
        return this.inscricaoEstadual;
    }
    setInscricaoEstadual(inscricaoEstadual) {
        this.inscricaoEstadual = inscricaoEstadual;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
}
exports.Destinatario = Destinatario;
