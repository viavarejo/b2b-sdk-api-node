export class EnderecoCobrancaDto {
    public cep: string;
    public estado: string;
    public logradouro: string;
    public cidade: string;
    public numero: number;
    public referencia: string;
    public bairro: string;
    public complemento: string;
    public telefone: string;
    public telefone2: string;
    public telefone3: string;

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