import fetch from "node-fetch";
import { Hosts } from "../model/common/hosts.js";

export class RequestService {

    private basePath: string = Hosts.EXTRA;
    
    //Cada parceiro tem o seu token
    private token: string = "H9xO4+R8GUy+18nUCgPOlg==";

    //file.env
    //dotenv lib
    //deixar arquivo env de exemplo - file.env.example

    public async getList(path: string, idSkuList: number[]): Promise<any> {
        var url = new URL(this.basePath + path);
        let params = new URLSearchParams();
        for (let i in idSkuList) {
            params.append("idSku", idSkuList[i].toString());
        }
        url.search = params.toString();     
        return await this.doGet(url.toString());
    }

    public async get(path: string, queryParams: Map<string, string>): Promise<any> {
        var url = new URL(this.basePath + path);
        if (queryParams != null) {
            url.search = this.buildParams(queryParams);
        }
        return await this.doGet(url.toString());
    }

    public async post(path : string, body: any) : Promise<any> {
        var url = new URL(this.basePath + path);
        return await this.doPost(url.toString(), body);
	}

	public async patch( path:string, body:any) : Promise<any> {
		var url = new URL(this.basePath + path);
        const options = {
            method: 'PATCH',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.token
            }
        }
        return await this.doFetch(url.toString(), options);
	}

    private async doGet(url: string) : Promise<any> { 
        const options = {
            headers: {
                'Authorization': this.token
            }
        };
        return await this.doFetch(url, options);
    }

    private async doPost(url: string, body: any) : Promise<any> { 
        const options = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.token
            }
        }
        return await this.doFetch(url, options);       
    }

    private async doFetch(url: string, options: object): Promise<any>{
        const resposta = await fetch(url, options);
        if (resposta.ok) {
            return resposta.json();
        }
        console.log('Erro API: ' + resposta.statusText);        
        throw new Error('Erro API: ' + resposta.statusText);
    }

    private buildParams(toConvert: Map<string, string>): string {
        let params = new URLSearchParams();
        for (const key of toConvert.keys()) {
            params.append(key, toConvert.get(key));
        }
        return params.toString();
    }

}