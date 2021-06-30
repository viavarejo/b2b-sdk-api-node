import { FormaPagamentoApi } from '../app/js/api/forma-pagamento-api.js';
import { assert } from 'chai';

const api = new FormaPagamentoApi();

describe("Testes de integracao da classe FormaPagamentoApi", () => {
    it("Deveria retornar forma de pagto com valor de parcela 1000.0 e quantidade 10", function () {
        return api.getOpcoesParcelamento("1", "5940", "57.822.975/0001-12", "1000").then(dto => {
            console.log(dto);
            assert.isNotNull(dto);
            assert.equal(dto.data[0].valorParcela, 1000.0);
            assert.equal(dto.data.length, 10);
        });
    });
    it("Deveria retornar objeto vazio para id Forma Pagamento invalido", function () {
        return api.getOpcoesParcelamento("999", "5940", "57.822.975/0001-12", "1000").then(dto => {
            console.log(dto);
            assert.isNotNull(dto);
            assert.isEmpty(dto.data);
        });
    });
});