export class CartaoCreditoDadosDto {
    public nome: string;
    public numero: string;
    public codigoVerificador: string;
    public validadeAno: string;
    public validadeMes: string;
    public validadeAnoMes: string;
    public quantidadeParcelas: number;

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

    public getValidadeAno(): string {
        return this.validadeAno;
    }

    public setValidadeAno(validadeAno: string): void {
        this.validadeAno = validadeAno;
    }

    public getValidadeMes(): string {
        return this.validadeMes;
    }

    public setValidadeMes(validadeMes: string): void {
        this.validadeMes = validadeMes;
    }

    public getValidadeAnoMes(): string {
        return this.validadeAnoMes;
    }

    public setValidadeAnoMes(validadeAnoMes: string): void {
        this.validadeAnoMes = validadeAnoMes;
    }

    public getQuantidadeParcelas(): number {
        return this.quantidadeParcelas;
    }

    public setQuantidadeParcelas(quantidadeParcelas: number): void {
        this.quantidadeParcelas = quantidadeParcelas;
    }

}