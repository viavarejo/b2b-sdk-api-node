export class DadosCartaoHelper {
    getEncryptedName() {
        return this.encryptor.encript(this.nome);
    }
    getEncryptedNumber() {
        return this.encryptor.encript(this.numero);
    }
    getEncryptedVerifyCode() {
        return this.encryptor.encript(this.codigoVerificador);
    }
    getEncryptedValidateYear() {
        return this.encryptor.encript(this.anoValidade);
    }
    getEncryptedValidateMonth() {
        return this.encryptor.encript(this.mesValidade);
    }
    getEncryptor() {
        return this.encryptor;
    }
    setEncryptor(encryptor) {
        this.encryptor = encryptor;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getNumero() {
        return this.numero;
    }
    setNumero(numero) {
        this.numero = numero;
    }
    getCodigoVerificador() {
        return this.codigoVerificador;
    }
    setCodigoVerificador(codigoVerificador) {
        this.codigoVerificador = codigoVerificador;
    }
    getAnoValidade() {
        return this.anoValidade;
    }
    setAnoValidade(anoValidade) {
        this.anoValidade = anoValidade;
    }
    getMesValidade() {
        return this.mesValidade;
    }
    setMesValidade(mesValidade) {
        this.mesValidade = mesValidade;
    }
}
