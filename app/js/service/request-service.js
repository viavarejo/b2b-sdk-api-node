var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fetch from "node-fetch";
export class RequestService {
    constructor() {
        this.basePath = "http://api-integracao-extra.hlg-b2b.net";
        this.token = "H9xO4+R8GUy+18nUCgPOlg==";
    }
    getList(path, idSkuList) {
        return __awaiter(this, void 0, void 0, function* () {
            var url = new URL(this.basePath + path);
            let params = new URLSearchParams();
            for (let i in idSkuList) {
                params.append("idSku", idSkuList[i].toString());
            }
            url.search = params.toString();
            return yield this.doFetch(url.toString());
        });
    }
    get(path, queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            var url = new URL(this.basePath + path);
            if (queryParams != null) {
                url.search = this.buildParams(queryParams);
            }
            return yield this.doFetch(url.toString());
        });
    }
    doFetch(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const resposta = yield fetch(url, {
                headers: {
                    'Authorization': this.token
                }
            });
            if (resposta.ok) {
                return resposta.json();
            }
            throw new Error('Erro API: ' + resposta.statusText);
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
