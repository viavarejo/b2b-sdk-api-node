import { RequestService } from '../service/request-service';
import { ChaveDTO } from '../model/response/chave-dto';

export class SegurancaApi{
    private requestService: RequestService = new RequestService();

    public async getChave(): Promise<ChaveDTO> {
        return await this.requestService.get("/seguranca/chaves", null);
    }
}    