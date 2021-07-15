import { RequestService } from '../service/request-service';
import { ProdutoDTO } from '../model/response/produto-dto';
import { ProdutosDTO } from '../model/response/produtos-dto';

export class ProdutoApi {
  private requestService: RequestService = new RequestService();

  public async getDadosProduto(idLojista: number, idSKu: number): Promise<ProdutoDTO> {
    return await this.requestService.get("/lojistas/" + idLojista + "/produtos/" + idSKu, null);
  }

  public async getListaDadosProdutos(idLojista: number, idSKuList: number[]): Promise<ProdutosDTO> {
    return await this.requestService.getList("/lojistas/" + idLojista + "/produtos", idSKuList);
  }

  public async getDadosProdutoCampanha(idCampanha: string, idSKu: string, cnpj: string, idLojista: string): Promise<ProdutoDTO> {
    let queryParams = new Map<string, string>();
    queryParams.set("idLojista", idLojista);
    queryParams.set("cnpj", cnpj);
    return await this.requestService.get("/campanhas/" + idCampanha + "/produtos/" + idSKu, queryParams);
  } 
}