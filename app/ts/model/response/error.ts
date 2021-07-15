import { Field } from "./field";

export class Error{
    public code : string;
    public message : string;
    public fields : Field[];

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