export class Pagamento {
    getCodigoDoErro() {
        return this.codigoDoErro;
    }
    setCodigoDoErro(codigoDoErro) {
        this.codigoDoErro = codigoDoErro;
    }
    getValorComplementar() {
        return this.valorComplementar;
    }
    setValorComplementar(valorComplementar) {
        this.valorComplementar = valorComplementar;
    }
    getQuantidadeParcelas() {
        return this.quantidadeParcelas;
    }
    setQuantidadeParcelas(quantidadeParcelas) {
        this.quantidadeParcelas = quantidadeParcelas;
    }
    getValorParcela() {
        return this.valorParcela;
    }
    setValorParcela(valorParcela) {
        this.valorParcela = valorParcela;
    }
    getIdFormaPagamento() {
        return this.idFormaPagamento;
    }
    setIdFormaPagamento(idFormaPagamento) {
        this.idFormaPagamento = idFormaPagamento;
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
    getUrl() {
        return this.url;
    }
    setUrl(url) {
        this.url = url;
    }
}
