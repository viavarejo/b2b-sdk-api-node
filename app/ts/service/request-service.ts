import fetch from "node-fetch";

export class RequestService {

    private basePath: string = "http://api-integracao-extra.hlg-b2b.net";
    private token: string = "H9xO4+R8GUy+18nUCgPOlg==";

    public async getList(path: string, idSkuList: number[]): Promise<any> {
        var url = new URL(this.basePath + path);
        let params = new URLSearchParams();
        for (let i in idSkuList) {
            params.append("idSku", idSkuList[i].toString());
        }
        url.search = params.toString();     
        return await this.doFetch(url.toString());
    }

    public async get(path: string, queryParams: Map<string, string>): Promise<any> {
        var url = new URL(this.basePath + path);
        if (queryParams != null) {
            url.search = this.buildParams(queryParams);
        }
        return await this.doFetch(url.toString());
    }

    private async doFetch(url: string) : Promise<any> { 
        const resposta = await fetch(url, {
            headers: {
                'Authorization': this.token
            }
        });
        if (resposta.ok) {
            return resposta.json();
        }
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