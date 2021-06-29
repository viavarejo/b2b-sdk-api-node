import { SegurancaApi } from '../app/js/api/seguranca-api.js';
import { assert } from 'chai';

const segurancaApi = new SegurancaApi();

describe("Testes de integracao da classe SegurancaApi", () => {
    it("Deveria retornar a chave", function() {  
      return  segurancaApi.getChave().then(dto => {
        console.log(dto);
        assert.isNotNull(dto);
        assert.isNotNull(dto.data.chavePublica);
      });
    });
  });