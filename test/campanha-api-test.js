import { CampanhaApi } from '../app/js/api/campanha-api.js';
import { assert } from 'chai';

const api = new CampanhaApi();

describe("Testes de integracao da classe CampanhaApi", () => {
    it("Deveria retornar a campanha", function () {
        return api.getCampanhas("2019-08-04", "2100-08-04").then(dto => {
            console.log(dto);
            assert.isNotNull(dto);
            assert.equal("57.822.975/0001-12", dto.data[0].cnpjContrato);
        });
    });

    it("Nao deveria retornar a campanha com data fim nula", function () {
        return api.getCampanhas("2019-08-04", null).then(dto => {
            console.log(dto);
            asser.isNull(dto.data);
            assert.equal("400", dto.error.code);
            assert.equal("Request inválido\\r\\nA dataFim é um parâmetro obrigatório.", dto.error.message);
        });
    });

    it("Deveria retornar a forma de pagamento", function () {
        return api.getFormasPagamento("5940", "57.822.975/0001-12").then(dto => {
            console.log(dto);
            assert.isNotNull(dto);
            assert.equal(1, dto.data[0].idFormaPagamento);
            assert.equal("Cartão de Crédito Visa ", dto.data[0].nome);
        });
    });

    // erro fora do padrão(cada hora da um resultado)
    it("Deveria retornar falha com a forma de pagamento e cnpj invalidos", function () {
        return api.getFormasPagamento("590", "57.822.97-12").then(dto => {
            console.log(dto);
            assert.isNotNull(dto);
            assert.isEmpty(dto.data);
            assert.isNull(dto.error.code);
        });
    });

});