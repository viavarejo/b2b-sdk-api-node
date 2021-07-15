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
exports.PedidoApi = void 0;
const util = require("util");
const request_service_1 = require("../service/request-service");
class PedidoApi {
    constructor() {
        this.requestService = new request_service_1.RequestService();
    }
    postCalcularCarrinho(pedidosCarrinho) {
        return __awaiter(this, void 0, void 0, function* () {
            // verify the required parameter
            if (pedidosCarrinho == null) {
                throw new Error("Missing the required parameter 'pedidosCarrinho' when calling postPedidosCarrinho");
            }
            let path = "/pedidos/carrinho";
            return yield this.requestService.post(path, pedidosCarrinho);
        });
    }
    getDadosPedidoParceiro(idCompra, queryParams) {
        return __awaiter(this, void 0, void 0, function* () {
            // verify the required parameter
            if (idCompra == null) {
                throw new Error("Missing the required parameter 'idCompra'");
            }
            if (queryParams == null) {
                throw new Error("Missing the required parameter 'queryParams'");
            }
            // create path and map variables
            let path = util.format("/pedidos/%s", idCompra);
            return yield this.requestService.get(path, queryParams);
        });
    }
    patchPedidosCancelamentoOrConfirmacao(confirmacaoPedido, idCompra) {
        return __awaiter(this, void 0, void 0, function* () {
            // verify the required parameter
            if (idCompra == null) {
                throw new Error("Missing the required parameter 'idCompra'");
            }
            // verify the required parameter
            if (confirmacaoPedido == null) {
                throw new Error("Missing the required parameter 'confirmacaoPedido' when calling pathPedidosCancelamentoOrConfirmacao");
            }
            // create path and map variables
            let path = util.format("/pedidos/%s", idCompra);
            return yield this.requestService.patch(path, confirmacaoPedido);
        });
    }
    getNotaFiscalPedido(pathParams) {
        return __awaiter(this, void 0, void 0, function* () {
            // verify the required parameter
            if (pathParams == null) {
                throw new Error("Missing the required parameter 'pathParams'");
            }
            // create path and map variables
            let path = util.format("/pedidos/%s/entregas/%s/nfe/%s", pathParams.get("idCompra"), pathParams.get("idCompraEntrega"), pathParams.get("formato"));
            return yield this.requestService.get(path, pathParams);
        });
    }
    postCriarPedido(pedido) {
        return __awaiter(this, void 0, void 0, function* () {
            // verify the required parameter
            if (pedido == null) {
                throw new Error("Missing the required parameter 'pedido'");
            }
            // create path and map variables
            let path = "/pedidos";
            return yield this.requestService.post(path, pedido);
        });
    }
}
exports.PedidoApi = PedidoApi;
