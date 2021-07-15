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
exports.FormaPagamentoApi = void 0;
const request_service_1 = require("../service/request-service");
class FormaPagamentoApi {
    constructor() {
        this.requestService = new request_service_1.RequestService();
    }
    getOpcoesParcelamento(idFormaPagamento, idCampanha, cnpj, valorParcela) {
        return __awaiter(this, void 0, void 0, function* () {
            let queryParams = new Map();
            queryParams.set("idCampanha", idCampanha);
            queryParams.set("cnpj", cnpj);
            queryParams.set("valorParcelar", valorParcela);
            return yield this.requestService.get("/formas-pagamento/" + idFormaPagamento + "/opcoes-parcelamento", queryParams);
        });
    }
}
exports.FormaPagamentoApi = FormaPagamentoApi;
