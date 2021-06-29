import { Field } from "./field.js";

export class Error{
    private  code : string;
    private message : string;
    private fields : Field[];

    public getCode(): string {
        return this.code;
    }

    public setCode(code: string): void {
        this.code = code;
    }

    public getMessage(): string {
        return this.message;
    }

    public setMessage(message: string): void {
        this.message = message;
    }

    public getFields(): Field[] {
        return this.fields;
    }

    public setFields(fields: Field[]): void {
        this.fields = fields;
    }

}