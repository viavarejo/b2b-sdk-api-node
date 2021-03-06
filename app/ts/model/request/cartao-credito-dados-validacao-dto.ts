export class CartaoCreditoDadosValidacaoDto{
    public nome: string;
    public numeroMascarado: string;
    public qtCaracteresCodigoVerificador: string;
    public validadeAno: string;
    public validadeMes: string;

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getNumeroMascarado(): string {
        return this.numeroMascarado;
    }

    public setNumeroMascarado(numeroMascarado: string): void {
        this.numeroMascarado = numeroMascarado;
    }

    public getQtCaracteresCodigoVerificador(): string {
        return this.qtCaracteresCodigoVerificador;
    }

    public setQtCaracteresCodigoVerificador(qtCaracteresCodigoVerificador: string): void {
        this.qtCaracteresCodigoVerificador = qtCaracteresCodigoVerificador;
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

}