
export class EntregaTipo {
    private idEntregaTipo: number;
    private nome: string;
    private habilitado: boolean;

    public getIdEntregaTipo(): number {
        return this.idEntregaTipo;
    }

    public setIdEntregaTipo(idEntregaTipo: number): void {
        this.idEntregaTipo = idEntregaTipo;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public isHabilitado(): boolean {
        return this.habilitado;
    }

    public setHabilitado(habilitado: boolean): void {
        this.habilitado = habilitado;
    }

}