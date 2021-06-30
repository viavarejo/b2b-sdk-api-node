import { CampanhaApi } from '../app/js/api/campanha-api.js';
import { assert } from 'chai';

const api = new CampanhaApi();

describe("Testes de integracao da classe CampanhaApi", () => {
    it("Deveria retornar a campanha", function () {
        return api.getCampanhas("2019-08-04", "2100-08-04").then(dto => {
            console.log(dto);
            assert.isNotNull(dto);
            assert.equal(dto.data[0].cnpjContrato, "57.822.975/0001-12");
        });
    });

    it("Nao deveria retornar a campanha com data fim nula", function () {
        return api.getCampanhas("2019-08-04", null).then(dto => {
            console.log(dto);
            asser.isNull(dto.data);
            assert.equal(dto.error.code, "400");
            assert.equal(dto.error.message, "Request inválido\\r\\nA dataFim é um parâmetro obrigatório.");
        });
    });

    it("Deveria retornar a forma de pagamento", function () {
        return api.getFormasPagamento("5940", "57.822.975/0001-12").then(dto => {
            console.log(dto);
            assert.isNotNull(dto);
            assert.equal(dto.data[0].idFormaPagamento, 1);
            assert.equal(dto.data[0].nome, "Cartão de Crédito Visa ");
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