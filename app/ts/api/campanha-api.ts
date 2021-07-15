import { RequestService } from '../service/request-service';
import { CampanhasDTO } from '../model/response/campanhas-dto';
import { FormasPagamentoDTO } from '../model/response/formas-pagamento-dto';

export class CampanhaApi{
    private requestService: RequestService = new RequestService();
    
    public async  getCampanhas( dtInicio :string,  dtFim:string) :Promise<CampanhasDTO>{
        let queryParams = new Map<string, string>();
        queryParams.set("dataInicio", dtInicio);
        queryParams.set("dataFim", dtFim);
        return await this.requestService.get("/campanhas" , queryParams);
    }

    public async  getFormasPagamento( idCampanha:string,  cnpj:string) :Promise<FormasPagamentoDTO> {
		let queryParams = new Map<string, string>();
		queryParams.set("cnpj", cnpj);
		return await this.requestService.get( "/campanhas/"+idCampanha+"/formas-pagamento/opcoes-parcelamento", queryParams);
	}
}