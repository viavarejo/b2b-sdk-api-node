import * as util from "util";
import { RequestService } from '../service/request-service.js';
import { PedidoCarrinho } from '../model/request/pedido-carrinho.js';
import { CalculoCarrinho } from "../model/response/calculo-carrinho.js";
import { ConfirmacaoReqDTO } from "../model/request/confirmacao-req-dto.js";
import { ConfirmacaoDTO } from "../model/response/confirmacao-dto.js";
import { CriacaoPedidoRequest } from "../model/request/criacao-pedido-request.js";
import { CriacaoPedidoDTO } from "../model/response/criacao-pedido-dto.js";
import { PedidoParceiroData } from "../model/response/pedido-parceiro-data.js";

export class PedidoApi {
    private requestService: RequestService = new RequestService();

    public async postCalcularCarrinho(pedidosCarrinho: PedidoCarrinho): Promise<CalculoCarrinho> {
        // verify the required parameter
        if (pedidosCarrinho == null) {
            throw new Error("Missing the required parameter 'pedidosCarrinho' when calling postPedidosCarrinho");
        }

        let path: string = "/pedidos/carrinho";
        return await this.requestService.post(path, pedidosCarrinho);
    }

    public async getDadosPedidoParceiro(pathParams: Map<String, String>, queryParams: Map<string, string>): Promise<PedidoParceiroData> {
        // verify the required parameter
        if (pathParams == null) {
            throw new Error("Missing the required parameter 'pathParams'");
        }
        if (queryParams == null) {
            throw new Error("Missing the required parameter 'queryParams'");
        }
        // create path and map variables
        let path: string = util.format("/pedidos/%s", pathParams.get("idCompra"));

        return await this.requestService.get(path, queryParams);
    }

    public async patchPedidosCancelamentoOrConfirmacao(confirmacaoPedido: ConfirmacaoReqDTO,
        variableParams: Map<string, string>): Promise<ConfirmacaoDTO> {
        // verify the required parameter
        if (variableParams == null) {
            throw new Error("Missing the required parameter 'variableParams'");
        }

        // verify the required parameter
        if (confirmacaoPedido == null) {
            throw new Error(
                "Missing the required parameter 'confirmacaoPedido' when calling pathPedidosCancelamentoOrConfirmacao");
        }

        // create path and map variables
        let path: string = util.format("/pedidos/%s", variableParams.get("idCompra"));

        return await this.requestService.patch(path, confirmacaoPedido);
    }

    public async getNotaFiscalPedido(pathParams: Map<string, string>): Promise<string> {
        // verify the required parameter
        if (pathParams == null) {
            throw new Error("Missing the required parameter 'pathParams'");
        }
        // create path and map variables
        let path: string = util.format("/pedidos/%s/entregas/%s/nfe/%s", pathParams.get("idCompra"),
            pathParams.get("idCompraEntrega"), pathParams.get("formato"));

        return await this.requestService.get(path, pathParams);
    }

    public async postCriarPedido(pedido: CriacaoPedidoRequest): Promise<CriacaoPedidoDTO> {
        // verify the required parameter
        if (pedido == null) {
            throw new Error("Missing the required parameter 'pedido'");
        }

        // create path and map variables
        let path: string = "/pedidos";

        return await this.requestService.post(path, pedido);
    }
}