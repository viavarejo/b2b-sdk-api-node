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
exports.CampanhaApi = void 0;
const request_service_1 = require("../service/request-service");
class CampanhaApi {
    constructor() {
        this.requestService = new request_service_1.RequestService();
    }
    getCampanhas(dtInicio, dtFim) {
        return __awaiter(this, void 0, void 0, function* () {
            let queryParams = new Map();
            queryParams.set("dataInicio", dtInicio);
            queryParams.set("dataFim", dtFim);
            return yield this.requestService.get("/campanhas", queryParams);
        });
    }
    getFormasPagamento(idCampanha, cnpj) {
        return __awaiter(this, void 0, void 0, function* () {
            let queryParams = new Map();
            queryParams.set("cnpj", cnpj);
            return yield this.requestService.get("/campanhas/" + idCampanha + "/formas-pagamento/opcoes-parcelamento", queryParams);
        });
    }
}
exports.CampanhaApi = CampanhaApi;
