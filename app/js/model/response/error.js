export class Error {
    getCode() {
        return this.code;
    }
    setCode(code) {
        this.code = code;
    }
    getMessage() {
        return this.message;
    }
    setMessage(message) {
        this.message = message;
    }
    getFields() {
        return this.fields;
    }
    setFields(fields) {
        this.fields = fields;
    }
}
