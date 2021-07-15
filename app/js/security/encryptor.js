"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Encryptor = void 0;
//import { NodeRSA } from "node-rsa";
const crypto = require("crypto");
class Encryptor {
    constructor(publicKey) {
        this.publicKey = this.convertToPem(publicKey);
        // um exemplo
        /*"-----BEGIN CERTIFICATE-----\n"+
        "MIIENTCCAx2gAwIBAgIJAJ5ApEGl2oaIMA0GCSqGSIb3DQEBBQUAMIGwMQswCQYD\n"+
        "VQQGEwJCUjELMAkGA1UECAwCU1AxFDASBgNVBAcMC1NBTyBDQUVUQU5PMRMwEQYD\n"+
        "VQQKDApWSUEgVkFSRUpPMSAwHgYDVQQLDBdTRUdVUkFOQ0EgREEgSU5GT1JNQUNB\n"+
        "TzEOMAwGA1UEAwwFUFJPWFkxNzA1BgkqhkiG9w0BCQEWKHRpLnNlZ3VyYW5jYS5p\n"+
        "bmZvcm1hY2FvQHZpYXZhcmVqby5jb20uYnIwHhcNMTgwODE2MTIzNjQ2WhcNMjEw\n"+
        "ODE1MTIzNjQ2WjCBsDELMAkGA1UEBhMCQlIxCzAJBgNVBAgMAlNQMRQwEgYDVQQH\n"+
        "DAtTQU8gQ0FFVEFOTzETMBEGA1UECgwKVklBIFZBUkVKTzEgMB4GA1UECwwXU0VH\n"+
        "VVJBTkNBIERBIElORk9STUFDQU8xDjAMBgNVBAMMBVBST1hZMTcwNQYJKoZIhvcN\n"+
        "AQkBFih0aS5zZWd1cmFuY2EuaW5mb3JtYWNhb0B2aWF2YXJlam8uY29tLmJyMIIB\n"+
        "IjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqObNb7KAP09WsV9h76Dw3tj2\n"+
        "qa3l97K+slfzLkOBvi0xjacuKCnvsMSGEBosvWY/qNmSLE1YaoyFt7ZaeOiALKh2\n"+
        "AFckJRM+/zvQzqi6cPnW0cGsEE/9WO48Fgh894pKjHpukATFb9tBYGTBEW46AH2W\n"+
        "iAR735KEnDfFAHG//pkLKriPWEZBr9tf4gdNvyJ/ybs5JrBRU1RKE9MM7qnMkCou\n"+
        "KTPwY/lS/2Xb1IYkyZulCf3Uyl7zpB6hQUhprS1R5meRocpGgHJCFfiWD/uXa5nR\n"+
        "EuGuQxcImwzvf+enwT6CooRoM2rN6IQWSY+uQ64dhSt4FMajZFmHVpLfUIOjEwID\n"+
        "AQABo1AwTjAdBgNVHQ4EFgQUZ22K62aMm/lI5LfblgINPvz8ae8wHwYDVR0jBBgw\n"+
        "FoAUZ22K62aMm/lI5LfblgINPvz8ae8wDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0B\n"+
        "AQUFAAOCAQEAj23IDXLPkQpFDbgAtgKuO9N66o61edbJ1+BMjdSsfO0vMVpmBDlK\n"+
        "dinxlh509/qJm/WLYswKkKOi7VHojBSV5HyrO5YGCSJFvVGJqF4JUxy7GrWTHqgw\n"+
        "cylmX5B5lNd5aMIxwG6AF4o2cp6IPe+Uwaroa8kLTrtM0eRgAInHbQA7MXbvOZY+\n"+
        "pzE4s6jFbA1O321zVg4C4Y3C4e30yf9YJNK5XjUP26duvwGqQrZg49ZU3W/t6GYY\n"+
        "1kQhSeBG0FPg2GOIHX03WPZpaJ7i1uCv6Ial07pxDxqcT8oCJalY9tW9sv7zBJRa\n"+
        "JgTIf5oz5jElb9kWd2D6XwaGB5PJfD6CTQ==\n"+
        "-----END CERTIFICATE-----";
        */
    }
    getEncript(secret) {
        const encryptedData = crypto.publicEncrypt({
            key: this.publicKey,
            padding: crypto.constants.RSA_PKCS1_PADDING
        }, Buffer.from(secret));
        return encryptedData.toString("base64");
    }
    convertToPem(key) {
        var dist = 64;
        var resultado = "";
        for (var x = 0; x < key.length / dist; x++) {
            resultado += key.substring(0 + x * dist, (x + 1) * dist) + '\n';
        }
        resultado = "-----BEGIN CERTIFICATE-----\n" + resultado + "-----END CERTIFICATE-----";
        //console.log(resultado");
        return resultado;
    }
}
exports.Encryptor = Encryptor;
