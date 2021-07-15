"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestService = void 0;
const node_fetch_1 = require("node-fetch");
const dotenv_1 = require("dotenv");
class RequestService {
    constructor() {
        this.loadEnv();
    }
    loadEnv() {
        dotenv_1.config();
        //console.log(process.env.USERDOMAIN);
        //console.log(process.env.HOST_BANDEIRA);
        this.basePath = process.env.HOST_BANDEIRA;
        this.token = process.env.TOKEN_PARCEIRO;
    }
    getList(path, idSkuList) {
        return __awaiter(this, void 0, void 0, function* () {
            var url = new URL(this.basePath + path);
            let params = new URLSearchParams();
            for (let i in idSkuList) {
                params.append("idSku", idSkuList[i].toString());
            }
            url.search = params.toString();
            return yield this.doGet(url.toString());
        });
    }
    get(path, queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            var url = new URL(this.basePath + path);
            if (queryParams != null) {
                url.search = this.buildParams(queryParams);
            }
            return yield this.doGet(url.toString());
        });
    }
    post(path, body) {
        return __awaiter(this, void 0, void 0, function* () {
            var url = new URL(this.basePath + path);
            return yield this.doPost(url.toString(), body);
        });
    }
    patch(path, body) {
        return __awaiter(this, void 0, void 0, function* () {
            var url = new URL(this.basePath + path);
            const options = {
                method: 'PATCH',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.token
                }
            };
            return yield this.doFetch(url.toString(), options);
        });
    }
    doGet(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = {
                headers: {
                    'Authorization': this.token
                }
            };
            return yield this.doFetch(url, options);
        });
    }
    doPost(url, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.token
                }
            };
            return yield this.doFetch(url, options);
        });
    }
    doFetch(url, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const resposta = yield node_fetch_1.default(url, options);
            //if (resposta.ok) {
            return resposta.json();
            //} 
            //throw new Error(`Erro API: ${resposta.statusText}`); 
        });
    }
    buildParams(toConvert) {
        let params = new URLSearchParams();
        for (const key of toConvert.keys()) {
            params.append(key, toConvert.get(key));
        }
        return params.toString();
    }
}
exports.RequestService = RequestService;
