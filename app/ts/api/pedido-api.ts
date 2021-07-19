import * as util from "util";
import { RequestService } from '../service/request-service';
import { PedidoCarrinho } from '../model/request/pedido-carrinho';
import { CalculoCarrinho } from '../model/response/calculo-carrinho';
import { ConfirmacaoReqDTO } from '../model/request/confirmacao-req-dto';
import { ConfirmacaoDTO } from '../model/response/confirmacao-dto';
import { CriacaoPedidoRequest } from '../model/request/criacao-pedido-request';
import { CriacaoPedidoDTO } from '../model/response/criacao-pedido-dto';
import { PedidoParceiroData } from '../model/response/pedido-parceiro-data';

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

    public async getDadosPedidoParceiro(idCompra : number, queryParams: Map<string, string>): Promise<PedidoParceiroData> {
        // verify the required parameter
        if (idCompra == null) {
            throw new Error("Missing the required parameter 'idCompra'");
        }
        if (queryParams == null) {
            throw new Error("Missing the required parameter 'queryParams'");
        }
        // create path and map variables
        let path: string = util.format("/pedidos/%s", idCompra);

        return await this.requestService.get(path, queryParams);
    }

    public async patchPedidosCancelamentoOrConfirmacao(confirmacaoPedido: ConfirmacaoReqDTO,
        idCompra: number): Promise<ConfirmacaoDTO> {
        // verify the required parameter
        if (idCompra == null) {
            throw new Error("Missing the required parameter 'idCompra'");
        }

        // verify the required parameter
        if (confirmacaoPedido == null) {
            throw new Error(
                "Missing the required parameter 'confirmacaoPedido' when calling pathPedidosCancelamentoOrConfirmacao");
        }

        // create path and map variables
        let path: string = util.format("/pedidos/%s", idCompra);

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