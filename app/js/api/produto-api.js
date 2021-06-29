var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { RequestService } from '../service/request-service.js';
export class ProdutoApi {
    constructor() {
        this.requestService = new RequestService();
    }
    getDadosProduto(idLogista, idSKu) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.requestService.get("/lojistas/" + idLogista + "/produtos/" + idSKu, null);
        });
    }
    getListaDadosProdutos(idLogista, idSKuList) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.requestService.getList("/lojistas/" + idLogista + "/produtos", idSKuList);
        });
    }
    getDadosProdutoCampanha(idCampanha, idSKu, cnpj, idLojista) {
        return __awaiter(this, void 0, void 0, function* () {
            let queryParams = new Map();
            queryParams.set("idLojista", idLojista);
            queryParams.set("cnpj", cnpj);
            return yield this.requestService.get("/campanhas/" + idCampanha + "/produtos/" + idSKu, queryParams);
        });
    }
}
