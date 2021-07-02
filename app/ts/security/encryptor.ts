export class Encryptor {

    constructor(
        private chavePublica: string
    ) { }

    public getEncript(inputData: string): string {
        return inputData;
    }
}