
export class DestinatarioDto {
    private nome: string;
    private cpfCnpj: string;
    private inscricaoEstadual: string;
    private email: string;

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getCpfCnpj(): string {
        return this.cpfCnpj;
    }

    public setCpfCnpj(cpfCnpj: string): void {
        this.cpfCnpj = cpfCnpj;
    }

    public getInscricaoEstadual(): string {
        return this.inscricaoEstadual;
    }

    public setInscricaoEstadual(inscricaoEstadual: string): void {
        this.inscricaoEstadual = inscricaoEstadual;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

}