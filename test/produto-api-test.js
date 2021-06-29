import { ProdutoApi } from '../app/js/api/produto-api.js';
//import { ProdutoDTO } from '../app/js/model/response/produto-dto.js';
import { assert } from 'chai';

const produtoApi = new ProdutoApi();

describe("Testes de integracao da classe ProdutoApi", () => {
  it("Deveria retornar um produto", function () {
    return produtoApi.getDadosProduto(15, 5880205).then((dadosProduto) => {
      console.log(dadosProduto);
      let productExpected = "Bola de Natal Santini Christmas 10cm Transparente - 3 Unidades.";
      assert.isNotNull(dadosProduto);
      assert.equal("Bola de Natal Santini Christmas 10cm Transparente - 3 Unidades.", dadosProduto.data.nome);
      assert.equal("http://imagens.extra.com.br/Control/ArquivoExibir.aspx?IdArquivo=253172122", dadosProduto.data.imagem);
      assert.equal(2868, dadosProduto.data.categoria);
      assert.equal(29.9, dadosProduto.data.valor);
    });
  });

  it("Deveria retornar uma lista de produtos", function () {
    return produtoApi.getListaDadosProdutos(15, [5880205, 5880206]).then((dto) => {
      console.log(dto);
      assert.isNotNull(dto);
      assert.equal("Bola de Natal Santini Christmas 10cm Transparente - 3 Unidades.", dto.data[0].nome);
      assert.equal(dto.data[0].descricao, "Sua decora&amp;#231;&amp;#227;o de Natal vai ficar moderna e cheia de estilo com o Conjunto de Bolas Santini Christmas - Branco/Transparente. Elas contam com 10 cent&amp;#237;metros de di&amp;#226;metro e s&amp;#227;o feitas em material pl&amp;#225;stico resistente com detalhes em glitter branco.&amp;lt;br&amp;gt;&amp;#13;&amp;#10;Um conjunto para decorar &amp;#225;rvores de Natal, ambientes e outros arranjos. Com os produtos Santini Christmas sua decora&amp;#231;&amp;#227;o de Natal vai ganhar elogios dos convidados!");
      assert.equal(dto.data[0].imagem, "http://imagens.extra.com.br/Control/ArquivoExibir.aspx?IdArquivo=253172122");
      assert.equal(dto.data[0].categoria, 2868);
    });
  });

  it("Deveria retornar um produto por campanha", function () {
    return produtoApi.getDadosProdutoCampanha("5940", "5880205", "57.822.975/0001-12", "15").then(dto => {
      //let prod = new ProdutoDTO();        
      //Object.assign(prod, dto);

      console.log(dto);
      assert.isNotNull(dto);
      assert.equal("Bola de Natal Santini Christmas 10cm Transparente - 3 Unidades.", dto.data.nome);
      assert.equal("http://imagens.extra.com.br/Control/ArquivoExibir.aspx?IdArquivo=253172122", dto.data.imagem);
      assert.equal(2868, dto.data.categoria);
      assert.equal(29.9, dto.data.valor);
      assert.equal(29.9, dto.data.valorDe);
    });
  });

  it("Nao deveria encontrar o produto", function () {
    return produtoApi.getDadosProduto(15, 595959).then((dadosProduto) => {
      console.log(dadosProduto);
      assert.isNotNull(dadosProduto);
      assert.equal("ProdutoNaoEncontrado", dadosProduto.error.code);
      assert.equal("Produto ou Sku 595959 não encontrado", dadosProduto.error.message);
    });
  });

  it("Nao deveria retornar uma lista de produtos", function () {
    return produtoApi.getListaDadosProdutos(15, [595959]).then((dadosProduto) => {
      console.log(dadosProduto);
      assert.isNotNull(dadosProduto);
      assert.equal("NaoEncontrado", dadosProduto.error.code);
      assert.equal("Nenhum SKU foi encontrado.(ErroValidacao)", dadosProduto.error.message);
    });
  });

  /* it("Nao Deveria retornar uma campanha", function() {  
      return produtoApi.getDadosProdutoCampanha("5940", "11111", "11111", "11111").then(dadosProduto => {
       console.log(dadosProduto);
       asser.isNull(dadosProduto.data);
       assert.equal("400", dadosProduto.error.code);
       assert.equal("A campanha não pertence ao cliente informado.(ErroValidacao)", dadosProduto.error.message);
      });
   });*/

  it("Deveria lançar exception", function () {
    try {
      produtoApi.getDadosProdutoCampanha("5940", "11111", "11111", "11111");
      //assert.fail();
    } catch (e) {
      assert(e.message.includes('Erro API:'))
    }
  });

});
