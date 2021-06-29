export class Field{
    private  field : string;
    private  value : string;
    private  message : string;

    public getField(): string {
        return this.field;
    }

    public setField(field: string): void {
        this.field = field;
    }

    public getValue(): string {
        return this.value;
    }

    public setValue(value: string): void {
        this.value = value;
    }

    public getMessage(): string {
        return this.message;
    }

    public setMessage(message: string): void {
        this.message = message;
    }

}