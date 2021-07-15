"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoCarrinho = void 0;
class PedidoCarrinho {
    getIdCampanha() {
        return this.idCampanha;
    }
    setIdCampanha(idCampanha) {
        this.idCampanha = idCampanha;
    }
    getCnpj() {
        return this.cnpj;
    }
    setCnpj(cnpj) {
        this.cnpj = cnpj;
    }
    getCep() {
        return this.cep;
    }
    setCep(cep) {
        this.cep = cep;
    }
    getProdutos() {
        return this.produtos;
    }
    setProdutos(produtos) {
        this.produtos = produtos;
    }
}
exports.PedidoCarrinho = PedidoCarrinho;
