export class Frete{
    private  estado : string;
    private  precoCapital : string;
    private  precoInterior : string;

    public getEstado(): string {
        return this.estado;
    }

    public setEstado(estado: string): void {
        this.estado = estado;
    }

    public getPrecoCapital(): string {
        return this.precoCapital;
    }

    public setPrecoCapital(precoCapital: string): void {
        this.precoCapital = precoCapital;
    }

    public getPrecoInterior(): string {
        return this.precoInterior;
    }

    public setPrecoInterior(precoInterior: string): void {
        this.precoInterior = precoInterior;
    }

}