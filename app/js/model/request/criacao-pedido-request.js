"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CriacaoPedidoRequest = void 0;
class CriacaoPedidoRequest {
    getProdutos() {
        return this.produtos;
    }
    setProdutos(produtos) {
        this.produtos = produtos;
    }
    getEnderecoEntrega() {
        return this.enderecoEntrega;
    }
    setEnderecoEntrega(enderecoEntrega) {
        this.enderecoEntrega = enderecoEntrega;
    }
    getDestinatario() {
        return this.destinatario;
    }
    setDestinatario(destinatario) {
        this.destinatario = destinatario;
    }
    getPagtosComplementares() {
        return this.pagtosComplementares;
    }
    setPagtosComplementares(pagtosComplementares) {
        this.pagtosComplementares = pagtosComplementares;
    }
    getDadosEntrega() {
        return this.dadosEntrega;
    }
    setDadosEntrega(dadosEntrega) {
        this.dadosEntrega = dadosEntrega;
    }
    getEnderecoCobranca() {
        return this.enderecoCobranca;
    }
    setEnderecoCobranca(enderecoCobranca) {
        this.enderecoCobranca = enderecoCobranca;
    }
    getCampanha() {
        return this.campanha;
    }
    setCampanha(campanha) {
        this.campanha = campanha;
    }
    getCnpj() {
        return this.cnpj;
    }
    setCnpj(cnpj) {
        this.cnpj = cnpj;
    }
    getPedidoParceiro() {
        return this.pedidoParceiro;
    }
    setPedidoParceiro(pedidoParceiro) {
        this.pedidoParceiro = pedidoParceiro;
    }
    getIdPedidoMktplc() {
        return this.idPedidoMktplc;
    }
    setIdPedidoMktplc(idPedidoMktplc) {
        this.idPedidoMktplc = idPedidoMktplc;
    }
    getSenhaAtendimento() {
        return this.senhaAtendimento;
    }
    setSenhaAtendimento(senhaAtendimento) {
        this.senhaAtendimento = senhaAtendimento;
    }
    getApolice() {
        return this.apolice;
    }
    setApolice(apolice) {
        this.apolice = apolice;
    }
    getAdministrador() {
        return this.administrador;
    }
    setAdministrador(administrador) {
        this.administrador = administrador;
    }
    getParametrosExtras() {
        return this.parametrosExtras;
    }
    setParametrosExtras(parametrosExtras) {
        this.parametrosExtras = parametrosExtras;
    }
    getValorFrete() {
        return this.valorFrete;
    }
    setValorFrete(valorFrete) {
        this.valorFrete = valorFrete;
    }
    isAguardarConfirmacao() {
        return this.aguardarConfirmacao;
    }
    setAguardarConfirmacao(aguardarConfirmacao) {
        this.aguardarConfirmacao = aguardarConfirmacao;
    }
    isOptantePeloSimples() {
        return this.optantePeloSimples;
    }
    setOptantePeloSimples(optantePeloSimples) {
        this.optantePeloSimples = optantePeloSimples;
    }
    isPossuiPagtoComplementar() {
        return this.possuiPagtoComplementar;
    }
    setPossuiPagtoComplementar(possuiPagtoComplementar) {
        this.possuiPagtoComplementar = possuiPagtoComplementar;
    }
    getValorTotalPedido() {
        return this.valorTotalPedido;
    }
    setValorTotalPedido(valorTotalPedido) {
        this.valorTotalPedido = valorTotalPedido;
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
exports.CriacaoPedidoRequest = CriacaoPedidoRequest;
