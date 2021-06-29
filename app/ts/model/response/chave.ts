export class Chave {
    private chavePublica: string;
    private dataCadastro: string;
    private dataExpiracao: string;
    private dataAtualizacao: string;
    private ativo: boolean;

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