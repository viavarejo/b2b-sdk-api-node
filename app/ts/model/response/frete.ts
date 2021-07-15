export class Frete{
    public  estado : string;
    public  precoCapital : string;
    public  precoInterior : string;

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