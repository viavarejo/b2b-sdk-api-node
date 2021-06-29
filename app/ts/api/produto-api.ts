import { RequestService } from '../service/request-service.js';
import { ProdutoDTO } from '../model/response/produto-dto.js';
import { ProdutosDTO } from '../model/response/produtos-dto.js';

export class ProdutoApi {
  private requestService: RequestService = new RequestService();

  public async getDadosProduto(idLogista: string, idSKu: string): Promise<ProdutoDTO> {
    return await this.requestService.get("/lojistas/" + idLogista + "/produtos/" + idSKu, null);
  }

  public async getListaDadosProdutos(idLogista: string, idSKuList: number[]): Promise<ProdutosDTO> {
    return await this.requestService.getList("/lojistas/" + idLogista + "/produtos", idSKuList);
  }

  public async getDadosProdutoCampanha(idCampanha: string, idSKu: string, cnpj: string, idLojista: string): Promise<ProdutoDTO> {
    let queryParams = new Map<string, string>();
    queryParams.set("idLojista", idLojista);
    queryParams.set("cnpj", cnpj);
    return await this.requestService.get("/campanhas/" + idCampanha + "/produtos/" + idSKu, queryParams);
  }

}