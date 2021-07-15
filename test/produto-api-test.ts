import { ProdutoApi } from '../app/ts/api/produto-api';
import { assert } from 'chai';

const produtoApi = new ProdutoApi();

describe("Testes de integracao da classe ProdutoApi", () => {
  it("Deveria retornar um produto", function () {
    return produtoApi.getDadosProduto(15, 5880205).then((dadosProduto) => {
      console.log("Response:");
      console.log(dadosProduto);
      assert.isNotNull(dadosProduto);
      assert.equal(dadosProduto.data.nome, "Bola de Natal Santini Christmas 10cm Transparente - 3 Unidades.",);
      assert.equal(dadosProduto.data.imagem, "http://imagens.extra.com.br/Control/ArquivoExibir.aspx?IdArquivo=253172122");
      assert.equal(dadosProduto.data.categoria, 2868);
      assert.equal(dadosProduto.data.valor, 29.9);
    });
  });

  it("Deveria retornar uma lista de produtos", function () {
    return produtoApi.getListaDadosProdutos(15, [5880205, 5880206]).then((dto) => {
      console.log("Response:");
      console.log(dto);
      assert.isNotNull(dto);
      assert.equal(dto.data[0].nome, "Bola de Natal Santini Christmas 10cm Transparente - 3 Unidades.");
      assert.equal(dto.data[0].descricao, "Sua decora&amp;#231;&amp;#227;o de Natal vai ficar moderna e cheia de estilo com o Conjunto de Bolas Santini Christmas - Branco/Transparente. Elas contam com 10 cent&amp;#237;metros de di&amp;#226;metro e s&amp;#227;o feitas em material pl&amp;#225;stico resistente com detalhes em glitter branco.&amp;lt;br&amp;gt;&amp;#13;&amp;#10;Um conjunto para decorar &amp;#225;rvores de Natal, ambientes e outros arranjos. Com os produtos Santini Christmas sua decora&amp;#231;&amp;#227;o de Natal vai ganhar elogios dos convidados!");
      assert.equal(dto.data[0].imagem, "http://imagens.extra.com.br/Control/ArquivoExibir.aspx?IdArquivo=253172122");
      assert.equal(dto.data[0].categoria, 2868);
    });
  });

  it("Deveria retornar um produto por campanha", function () {
    return produtoApi.getDadosProdutoCampanha("5940", "5880205", "57.822.975/0001-12", "15").then(dto => {
      console.log("Response:");
      console.log(dto);
      assert.isNotNull(dto);
      assert.equal(dto.data.nome, "Bola de Natal Santini Christmas 10cm Transparente - 3 Unidades.");
      assert.equal(dto.data.imagem, "http://imagens.extra.com.br/Control/ArquivoExibir.aspx?IdArquivo=253172122");
      assert.equal(dto.data.categoria, 2868);
      assert.equal(dto.data.valor, 29.9);
      assert.equal(dto.data.valorDe, 29.9);
    });
  });

  it("Nao deveria encontrar o produto", function () {
    return produtoApi.getDadosProduto(15, 595959).then((dadosProduto) => {
      console.log("Response:");
      console.log(dadosProduto);
      assert.isNotNull(dadosProduto);
      assert.equal(dadosProduto.error.code, "ProdutoNaoEncontrado");
      assert.equal(dadosProduto.error.message, "Produto ou Sku 595959 não encontrado");
    });
  });

  it("Nao deveria retornar uma lista de produtos", function () {
    return produtoApi.getListaDadosProdutos(15, [595959]).then((dadosProduto) => {
      console.log("Response:");
      console.log(dadosProduto);
      assert.isNotNull(dadosProduto);      
      assert.equal(dadosProduto.error.message, "Nenhum SKU foi encontrado.(ErroValidacao)");
    });
  });

  it("Deveria lançar exception", async () => {
    await produtoApi.getDadosProdutoCampanha("5940", "11111", "11111", "11111").catch(error => {
      console.log("Response:");
      console.log(error.message);
      assert.equal(error.message, "Erro API: Bad Request");
    });

  });

});