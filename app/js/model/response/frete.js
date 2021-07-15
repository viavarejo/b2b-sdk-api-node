"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Frete = void 0;
class Frete {
    getEstado() {
        return this.estado;
    }
    setEstado(estado) {
        this.estado = estado;
    }
    getPrecoCapital() {
        return this.precoCapital;
    }
    setPrecoCapital(precoCapital) {
        this.precoCapital = precoCapital;
    }
    getPrecoInterior() {
        return this.precoInterior;
    }
    setPrecoInterior(precoInterior) {
        this.precoInterior = precoInterior;
    }
}
exports.Frete = Frete;
