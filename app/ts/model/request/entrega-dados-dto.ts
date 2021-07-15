export class EntregaDadosDto {
    public previsaoDeEntrega: string;
    public valorFrete: number;
    public idEntregaTipo: number;
    public idEnderecoLojaFisica: number;
    public idUnidadeNegocio: number;

    public getPrevisaoDeEntrega(): string {
        return this.previsaoDeEntrega;
    }

    public setPrevisaoDeEntrega(previsaoDeEntrega: string): void {
        this.previsaoDeEntrega = previsaoDeEntrega;
    }

    public getValorFrete(): number {
        return this.valorFrete;
    }

    public setValorFrete(valorFrete: number): void {
        this.valorFrete = valorFrete;
    }

    public getIdEntregaTipo(): number {
        return this.idEntregaTipo;
    }

    public setIdEntregaTipo(idEntregaTipo: number): void {
        this.idEntregaTipo = idEntregaTipo;
    }

    public getIdEnderecoLojaFisica(): number {
        return this.idEnderecoLojaFisica;
    }

    public setIdEnderecoLojaFisica(idEnderecoLojaFisica: number): void {
        this.idEnderecoLojaFisica = idEnderecoLojaFisica;
    }

    public getIdUnidadeNegocio(): number {
        return this.idUnidadeNegocio;
    }

    public setIdUnidadeNegocio(idUnidadeNegocio: number): void {
        this.idUnidadeNegocio = idUnidadeNegocio;
    }

}