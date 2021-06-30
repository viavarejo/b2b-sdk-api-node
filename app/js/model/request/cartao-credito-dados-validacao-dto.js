export class CartaoCreditoDadosValidacaoDto {
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getNumeroMascarado() {
        return this.numeroMascarado;
    }
    setNumeroMascarado(numeroMascarado) {
        this.numeroMascarado = numeroMascarado;
    }
    getQtCaracteresCodigoVerificador() {
        return this.qtCaracteresCodigoVerificador;
    }
    setQtCaracteresCodigoVerificador(qtCaracteresCodigoVerificador) {
        this.qtCaracteresCodigoVerificador = qtCaracteresCodigoVerificador;
    }
    getValidadeAno() {
        return this.validadeAno;
    }
    setValidadeAno(validadeAno) {
        this.validadeAno = validadeAno;
    }
    getValidadeMes() {
        return this.validadeMes;
    }
    setValidadeMes(validadeMes) {
        this.validadeMes = validadeMes;
    }
}
