export class EnderecoCobrancaDto {
    private cep: string;
    private estado: string;
    private logradouro: string;
    private cidade: string;
    private numero: number;
    private referencia: string;
    private bairro: string;
    private complemento: string;
    private telefone: string;
    private telefone2: string;
    private telefone3: string;

    public getCep(): string {
        return this.cep;
    }

    public setCep(cep: string): void {
        this.cep = cep;
    }

    public getEstado(): string {
        return this.estado;
    }

    public setEstado(estado: string): void {
        this.estado = estado;
    }

    public getLogradouro(): string {
        return this.logradouro;
    }

    public setLogradouro(logradouro: string): void {
        this.logradouro = logradouro;
    }

    public getCidade(): string {
        return this.cidade;
    }

    public setCidade(cidade: string): void {
        this.cidade = cidade;
    }

    public getNumero(): number {
        return this.numero;
    }

    public setNumero(numero: number): void {
        this.numero = numero;
    }

    public getReferencia(): string {
        return this.referencia;
    }

    public setReferencia(referencia: string): void {
        this.referencia = referencia;
    }

    public getBairro(): string {
        return this.bairro;
    }

    public setBairro(bairro: string): void {
        this.bairro = bairro;
    }

    public getComplemento(): string {
        return this.complemento;
    }

    public setComplemento(complemento: string): void {
        this.complemento = complemento;
    }

    public getTelefone(): string {
        return this.telefone;
    }

    public setTelefone(telefone: string): void {
        this.telefone = telefone;
    }

    public getTelefone2(): string {
        return this.telefone2;
    }

    public setTelefone2(telefone2: string): void {
        this.telefone2 = telefone2;
    }

    public getTelefone3(): string {
        return this.telefone3;
    }

    public setTelefone3(telefone3: string): void {
        this.telefone3 = telefone3;
    }

}