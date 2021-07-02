import { Encryptor } from "../security/encryptor.js";

export class DadosCartaoHelper {

    constructor(private encryptor: Encryptor,
        private nome: string,
        private numero: string,
        private codigoVerificador: string,
        private anoValidade: string,
        private mesValidade: string) {
    }

    public getEncryptedName(): string {
        return this.encryptor.getEncript(this.nome);
    }

    public getEncryptedNumber(): string {
        return this.encryptor.getEncript(this.numero);
    }

    public getEncryptedVerifyCode(): string {
        return this.encryptor.getEncript(this.codigoVerificador);
    }

    public getEncryptedValidateYear(): string {
        return this.encryptor.getEncript(this.anoValidade);
    }

    public getEncryptedValidateMonth(): string {
        return this.encryptor.getEncript(this.mesValidade);
    }

    public getEncryptor(): Encryptor {
        return this.encryptor;
    }

    public setEncryptor(encryptor: Encryptor): void {
        this.encryptor = encryptor;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getNumero(): string {
        return this.numero;
    }

    public setNumero(numero: string): void {
        this.numero = numero;
    }

    public getCodigoVerificador(): string {
        return this.codigoVerificador;
    }

    public setCodigoVerificador(codigoVerificador: string): void {
        this.codigoVerificador = codigoVerificador;
    }

    public getAnoValidade(): string {
        return this.anoValidade;
    }

    public setAnoValidade(anoValidade: string): void {
        this.anoValidade = anoValidade;
    }

    public getMesValidade(): string {
        return this.mesValidade;
    }

    public setMesValidade(mesValidade: string): void {
        this.mesValidade = mesValidade;
    }

}