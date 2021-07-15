import { SegurancaApi } from '../app/ts/api/seguranca-api';
import { assert } from 'chai';

const segurancaApi = new SegurancaApi();

describe("Testes de integracao da classe SegurancaApi", () => {
  it("Deveria retornar a chave", function () {
    return segurancaApi.getChave().then(dto => {
      console.log("Response:");
      console.log(dto);
      assert.isNotNull(dto);
      assert.isNotNull(dto.data.chavePublica);
    });
  });
});