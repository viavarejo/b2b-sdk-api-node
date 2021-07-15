"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Error = void 0;
class Error {
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
exports.Error = Error;
