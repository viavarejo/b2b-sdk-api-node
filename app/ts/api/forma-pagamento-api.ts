import { RequestService } from '../service/request-service.js';
import { OpcoesParcelamentoDTO } from '../model/response/opcoes-parcelamento-dto.js';

export class FormaPagamentoApi {
    private requestService: RequestService = new RequestService();

    public async getOpcoesParcelamento(idFormaPagamento: string, idCampanha: string,
        cnpj: string, valorParcela: string): Promise<OpcoesParcelamentoDTO> {
        let queryParams = new Map<string, string>();
        queryParams.set("idCampanha", idCampanha);
        queryParams.set("cnpj", cnpj);
        queryParams.set("valorParcelar", valorParcela);
        return await this.requestService.get("/formas-pagamento/" + idFormaPagamento + "/opcoes-parcelamento", queryParams);
    }

}