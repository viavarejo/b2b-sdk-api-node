export class Chave {
    public chavePublica: string;
    public dataCadastro: string;
    public dataExpiracao: string;
    public dataAtualizacao: string;
    public ativo: boolean;

    public getChavePublica(): string {
        return this.chavePublica;
    }

    public setChavePublica(chavePublica: string): void {
        this.chavePublica = chavePublica;
    }

    public getDataCadastro(): string {
        return this.dataCadastro;
    }

    public setDataCadastro(dataCadastro: string): void {
        this.dataCadastro = dataCadastro;
    }

    public getDataExpiracao(): string {
        return this.dataExpiracao;
    }

    public setDataExpiracao(dataExpiracao: string): void {
        this.dataExpiracao = dataExpiracao;
    }

    public getDataAtualizacao(): string {
        return this.dataAtualizacao;
    }

    public setDataAtualizacao(dataAtualizacao: string): void {
        this.dataAtualizacao = dataAtualizacao;
    }

    public isAtivo(): boolean {
        return this.ativo;
    }

    public setAtivo(ativo: boolean): void {
        this.ativo = ativo;
    }

}