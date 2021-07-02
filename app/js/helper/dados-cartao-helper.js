export class DadosCartaoHelper {
    constructor(encryptor, nome, numero, codigoVerificador, anoValidade, mesValidade) {
        this.encryptor = encryptor;
        this.nome = nome;
        this.numero = numero;
        this.codigoVerificador = codigoVerificador;
        this.anoValidade = anoValidade;
        this.mesValidade = mesValidade;
    }
    getEncryptedName() {
        return this.encryptor.getEncript(this.nome);
    }
    getEncryptedNumber() {
        return this.encryptor.getEncript(this.numero);
    }
    getEncryptedVerifyCode() {
        return this.encryptor.getEncript(this.codigoVerificador);
    }
    getEncryptedValidateYear() {
        return this.encryptor.getEncript(this.anoValidade);
    }
    getEncryptedValidateMonth() {
        return this.encryptor.getEncript(this.mesValidade);
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
