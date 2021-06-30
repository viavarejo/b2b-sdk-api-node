export class Motivo {
    private categoria: string;
    private assunto: string;
    private motivo: string;
    private observacao: string;

    public getCategoria(): string {
        return this.categoria;
    }

    public setCategoria(categoria: string): void {
        this.categoria = categoria;
    }

    public getAssunto(): string {
        return this.assunto;
    }

    public setAssunto(assunto: string): void {
        this.assunto = assunto;
    }

    public getMotivo(): string {
        return this.motivo;
    }

    public setMotivo(motivo: string): void {
        this.motivo = motivo;
    }

    public getObservacao(): string {
        return this.observacao;
    }

    public setObservacao(observacao: string): void {
        this.observacao = observacao;
    }

}