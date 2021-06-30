export class TrackingEntrega {
    private codDescricao: string;
    private data: string;
    private dataEntrega: string;
    private descricao: string;

    public getCodDescricao(): string {
        return this.codDescricao;
    }

    public setCodDescricao(codDescricao: string): void {
        this.codDescricao = codDescricao;
    }

    public getData(): string {
        return this.data;
    }

    public setData(data: string): void {
        this.data = data;
    }

    public getDataEntrega(): string {
        return this.dataEntrega;
    }

    public setDataEntrega(dataEntrega: string): void {
        this.dataEntrega = dataEntrega;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public setDescricao(descricao: string): void {
        this.descricao = descricao;
    }

}