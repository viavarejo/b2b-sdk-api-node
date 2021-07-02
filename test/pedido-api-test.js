import { SegurancaApi } from '../app/js/api/seguranca-api.js';
import { PedidoApi } from '../app/js/api/pedido-api.js';
import { PedidoCarrinho } from '../app/js/model/request/pedido-carrinho.js';
import { Produtos } from '../app/js/model/request/produtos.js';
import { DadosCartaoHelper } from '../app/js/helper/dados-cartao-helper.js';
import { DadosPedidoHelper } from '../app/js/helper/dados-pedido-helper.js';
import { Encryptor } from '../app/js/security/encryptor.js';
import { PedidoProdutoDto } from '../app/js/model/request/pedido-produto-dto.js';
import { EnderecoEntregaDto } from '../app/js/model/request/endereco-entrega-dto.js';
import { DestinatarioDto } from '../app/js/model/request/destinatario-dto.js';
import { EntregaDadosDto } from '../app/js/model/request/entrega-dados-dto.js';
import { CriacaoPedidoRequest } from '../app/js/model/request/criacao-pedido-request.js';
import { PagamentoComplementarDto } from '../app/js/model/request/pagamento-complementar-dto.js';
import { CartaoCreditoDadosDto } from '../app/js/model/request/cartao-credito-dados-dto.js';
import { CartaoCreditoDadosValidacaoDto } from '../app/js/model/request/cartao-credito-dados-validacao-dto.js';
import { EnderecoCobrancaDto } from '../app/js/model/request/endereco-cobranca-dto.js';
import { ConfirmacaoReqDTO } from '../app/js/model/request/confirmacao-req-dto.js';

import { assert } from 'chai';

/** CEP padrao dos testes */
const CEP = "01525000";

/** Id Lojista padrao dos testes. */
const ID_LOJISTA = 15;

/** CPF FICTICIO PARA TESTES */
const CPF_DESTINATARIO = "435.375.660-50";

/** CNPJ padrao dos testes. */
const CNPJ = "57.822.975/0001-12";

/** Id Campanha padrao dos testes. */
const ID_CAMPANHA = 5940;

/** Atributo do Id Sku para criacao do primeiro Pedido. */
const ID_SKU_CRIACAO_PEDIDO = 8935731;

/** Atributo do Id Sku para criacao do segundo Pedido com cartao de credito. */
const ID_SKU_CRIACAO_PEDIDO_COM_CARTAO = 9342200;

/** Tipo de Forma de pagamento cartão Visa. */
//const  CARTAO_VISA = 2;

/** Tipo de Forma de pagamento cartão Master. */
const CARTAO_MASTER = 3;

/** Numero de cartao de credito Master mascarado. */
const NUMERO_CARTAO_MASTER_MASCARADO = "515590XXXXXX0001";

/** Numero de cartao de credito Master ficticio. */
const NUMERO_CARTAO_MASTER = "5155901222280001";

/** Codigo verificador do cartao de credito Master ficticio. */
const CODIGO_VERIFICADOR = "1234";

/** Ano de validade do cartao de credito Master ficticio. */
const ANO_VALIDADE = "2045";

/** Mes de validade cartao de credito Master ficticio. */
const MES_VALIDADE = "12";

const CHAVE_PUBLICA_DEFAULT = "MIIENTCCAx2gAwIBAgIJAJ5ApEGl2oaIMA0GCSqGSIb3DQEBBQUAMIGwMQswCQYDVQQGEwJCUjELMAkGA1UECAwCU1AxFDASBgNVBAcMC1NBTyBDQUVUQU5PMRMwEQYDVQQKDApWSUEgVkFSRUpPMSAwHgYDVQQLDBdTRUdVUkFOQ0EgREEgSU5GT1JNQUNBTzEOMAwGA1UEAwwFUFJPWFkxNzA1BgkqhkiG9w0BCQEWKHRpLnNlZ3VyYW5jYS5pbmZvcm1hY2FvQHZpYXZhcmVqby5jb20uYnIwHhcNMTgwODE2MTIzNjQ2WhcNMjEwODE1MTIzNjQ2WjCBsDELMAkGA1UEBhMCQlIxCzAJBgNVBAgMAlNQMRQwEgYDVQQHDAtTQU8gQ0FFVEFOTzETMBEGA1UECgwKVklBIFZBUkVKTzEgMB4GA1UECwwXU0VHVVJBTkNBIERBIElORk9STUFDQU8xDjAMBgNVBAMMBVBST1hZMTcwNQYJKoZIhvcNAQkBFih0aS5zZWd1cmFuY2EuaW5mb3JtYWNhb0B2aWF2YXJlam8uY29tLmJyMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqObNb7KAP09WsV9h76Dw3tj2qa3l97K+slfzLkOBvi0xjacuKCnvsMSGEBosvWY/qNmSLE1YaoyFt7ZaeOiALKh2AFckJRM+/zvQzqi6cPnW0cGsEE/9WO48Fgh894pKjHpukATFb9tBYGTBEW46AH2WiAR735KEnDfFAHG//pkLKriPWEZBr9tf4gdNvyJ/ybs5JrBRU1RKE9MM7qnMkCouKTPwY/lS/2Xb1IYkyZulCf3Uyl7zpB6hQUhprS1R5meRocpGgHJCFfiWD/uXa5nREuGuQxcImwzvf+enwT6CooRoM2rN6IQWSY+uQ64dhSt4FMajZFmHVpLfUIOjEwIDAQABo1AwTjAdBgNVHQ4EFgQUZ22K62aMm/lI5LfblgINPvz8ae8wHwYDVR0jBBgwFoAUZ22K62aMm/lI5LfblgINPvz8ae8wDAYDVR0TBAUwAwEB/zANBgkqhkiG9w0BAQUFAAOCAQEAj23IDXLPkQpFDbgAtgKuO9N66o61edbJ1+BMjdSsfO0vMVpmBDlKdinxlh509/qJm/WLYswKkKOi7VHojBSV5HyrO5YGCSJFvVGJqF4JUxy7GrWTHqgwcylmX5B5lNd5aMIxwG6AF4o2cp6IPe+Uwaroa8kLTrtM0eRgAInHbQA7MXbvOZY+pzE4s6jFbA1O321zVg4C4Y3C4e30yf9YJNK5XjUP26duvwGqQrZg49ZU3W/t6GYY1kQhSeBG0FPg2GOIHX03WPZpaJ7i1uCv6Ial07pxDxqcT8oCJalY9tW9sv7zBJRaJgTIf5oz5jElb9kWd2D6XwaGB5PJfD6CTQ==";

/**
 * Atributo global utilizado para guardar o primeiro pedido criado para ser
 * utilizado nos demais testes.
 */
let pedidoHelper;

/**
 * Atributo global utilizado para guardar o segundo pedido criado com Cartao
 * Credito para ser utilizado nos demais testes.
 */
let pedidoComCartaoHelper;

let pedidoApi;
let publicKey;

describe("Testes de integracao da classe PedidoApi", () => {
    // initial method
    before(function () {
        // get chave publica
        let segurancaApi = new SegurancaApi();
        let dtoChave = segurancaApi.getChave();
        if (dtoChave.data != null) {
            publicKey = dtoChave.data.chavePublica;
        } else {
            publicKey = CHAVE_PUBLICA_DEFAULT;
        }

        // cria instancia de objetos globais
        pedidoApi = new PedidoApi();
    });


    it("1-Deveria retornar o Calculo do Carrinho para criacao do Pedido", function () {
        this.timeout(10000);
        //mount request object
        let pedidoCarrinho = new PedidoCarrinho();
        let produto = new Produtos();
        produto.codigo = ID_SKU_CRIACAO_PEDIDO;
        produto.quantidade = 1;
        produto.idLojista = ID_LOJISTA;

        pedidoCarrinho.idCampanha = ID_CAMPANHA;
        pedidoCarrinho.cnpj = CNPJ;
        pedidoCarrinho.cep = CEP;
        pedidoCarrinho.produtos = new Array();
        pedidoCarrinho.produtos.push(produto);

        //console.log("Request:");
        //console.log(pedidoCarrinho);

        return pedidoApi.postCalcularCarrinho(pedidoCarrinho).then(calculoCarrinho => {
            // console.log("Response:");
            // console.log(calculoCarrinho);

            assert.isNotNull(calculoCarrinho);
            assert.isTrue(calculoCarrinho.data.valorFrete > 0.0);
            assert.isTrue(calculoCarrinho.data.valorTotaldoPedido > 0.0);
            assert.isTrue(calculoCarrinho.data.produtos[0].valorTotalFrete > 0.0);

            // preparacao do objeto que sera utilizado nos demais testes
            pedidoHelper = new DadosPedidoHelper();
            pedidoHelper.idSku = calculoCarrinho.data.produtos[0].idSku;
            pedidoHelper.precoVenda = calculoCarrinho.data.produtos[0].valorUnitario;
            pedidoHelper.valorFrete = calculoCarrinho.data.produtos[0].valorTotalFrete;
        });
    });

    it("2-Deveria retornar o Calculo do Carrinho para criacao do Pedido com cartão", function () {
        this.timeout(10000);
        //mount request object
        let pedidoCarrinho = new PedidoCarrinho();
        let produto = new Produtos();
        produto.codigo = ID_SKU_CRIACAO_PEDIDO_COM_CARTAO;
        produto.quantidade = 1;
        produto.idLojista = ID_LOJISTA;

        pedidoCarrinho.idCampanha = ID_CAMPANHA;
        pedidoCarrinho.cnpj = CNPJ;
        pedidoCarrinho.cep = CEP;
        pedidoCarrinho.produtos = [produto];//new Array();
        //pedidoCarrinho.produtos.push(produto);

        //console.log("Request:");
        //console.log(pedidoCarrinho);

        return pedidoApi.postCalcularCarrinho(pedidoCarrinho).then(calculoCarrinho => {
            //console.log("Response:");
            //console.log(calculoCarrinho);

            assert.isNotNull(calculoCarrinho);
            assert.isTrue(calculoCarrinho.data.valorFrete > 0.0);
            assert.isTrue(calculoCarrinho.data.valorTotaldoPedido > 0.0);
            assert.isTrue(calculoCarrinho.data.produtos[0].valorTotalFrete > 0.0);

            // preparacao do objeto que sera utilizado nos demais testes
            pedidoComCartaoHelper = new DadosPedidoHelper();
            pedidoComCartaoHelper.idSku = calculoCarrinho.data.produtos[0].idSku;
            pedidoComCartaoHelper.precoVenda = calculoCarrinho.data.produtos[0].valorUnitario;
            pedidoComCartaoHelper.valorFrete = calculoCarrinho.data.produtos[0].valorTotalFrete;
        });
    });

    it("3-Deveria criar o pedido sem cartão", function () {
        this.timeout(10000);
        // Produto
        let produto = new PedidoProdutoDto();
        produto.idLojista = ID_LOJISTA;
        produto.codigo = pedidoHelper.idSku;
        produto.quantidade = 1;
        produto.premio = 0;
        produto.precoVenda = pedidoHelper.precoVenda;
        let produtos = new Array();
        produtos.push(produto);

        // endereco Entrega
        let enderecoEntrega = new EnderecoEntregaDto();
        enderecoEntrega.cep = "01525-000";
        enderecoEntrega.estado = "SP";
        enderecoEntrega.logradouro = "rua da se";
        enderecoEntrega.cidade = "São Paulo";
        enderecoEntrega.numero = 63;
        enderecoEntrega.referencia = "teste";
        enderecoEntrega.bairro = "bairro se";
        enderecoEntrega.complemento = "teste";
        enderecoEntrega.telefone = "22333333";
        enderecoEntrega.telefone2 = "22333335";
        enderecoEntrega.telefone3 = "22333336";

        // destinatario
        let destinatario = new DestinatarioDto();
        destinatario.nome = "teste";
        destinatario.cpfCnpj = CPF_DESTINATARIO;
        destinatario.email = "teste@teste.com";

        // dados entrega
        let dadosEntrega = new EntregaDadosDto();
        dadosEntrega.valorFrete = pedidoHelper.valorFrete;

        // pedido
        let pedido = new CriacaoPedidoRequest();
        pedido.produtos = produtos;
        pedido.enderecoEntrega = enderecoEntrega;
        pedido.destinatario = destinatario;
        pedido.dadosEntrega = dadosEntrega;
        pedido.campanha = ID_CAMPANHA;
        pedido.cnpj = CNPJ;
        pedido.pedidoParceiro = geraPedidoParceiroId();
        pedido.valorFrete = pedidoHelper.valorFrete;
        pedido.aguardarConfirmacao = true;
        pedido.optantePeloSimples = true;

        //console.log("Request:");
        //console.log(pedido);

        return pedidoApi.postCriarPedido(pedido).then(criacaoPedidoDTO => {
            //console.log("Request:");
            //console.log(criacaoPedidoDTO);
            let expectedValue = pedidoHelper.getTotalPedido().toPrecision(4);
            assert.equal(criacaoPedidoDTO.data.valorTotalPedido, expectedValue);

            // complementa dados do Pedido para utilizar nos outros metodos
            pedidoHelper.idPedido = criacaoPedidoDTO.data.codigoPedido;
            pedidoHelper.idPedidoParceiro = criacaoPedidoDTO.data.pedidoParceiro;
        });
    });

    it("4-Deveria criar o pedido com cartão", function () {
        this.timeout(15000);
        // Produto
        let produto = new PedidoProdutoDto();
        produto.idLojista = ID_LOJISTA;
        produto.codigo = pedidoComCartaoHelper.idSku;
        produto.quantidade = 1;
        produto.precoVenda = pedidoComCartaoHelper.precoVenda;
        let produtos = new Array();
        produtos.push(produto);

        // endereco Entrega
        let enderecoEntrega = new EnderecoEntregaDto();
        enderecoEntrega.cep = CEP;
        enderecoEntrega.estado = "SP";
        enderecoEntrega.logradouro = "rua da se";
        enderecoEntrega.cidade = "São Paulo";
        enderecoEntrega.numero = 63;
        enderecoEntrega.referencia = "teste";
        enderecoEntrega.bairro = "bairro se";
        enderecoEntrega.complemento = "teste";
        enderecoEntrega.telefone = "22333333";
        enderecoEntrega.telefone2 = "22333335";
        enderecoEntrega.telefone3 = "22333336";

        // destinatario
        let destinatario = new DestinatarioDto();
        destinatario.nome = "teste";
        destinatario.cpfCnpj = CPF_DESTINATARIO;
        destinatario.email = "teste@teste.com";

        // pedido
        let pedido = new CriacaoPedidoRequest();
        pedido.campanha = ID_CAMPANHA;
        pedido.cnpj = CNPJ;
        pedido.pedidoParceiro = geraPedidoParceiroId();
        pedido.valorFrete = pedidoComCartaoHelper.valorFrete;
        pedido.aguardarConfirmacao = true;
        pedido.optantePeloSimples = true;
        pedido.possuiPagtoComplementar = true;

        // pagamentos complementares
        let pagamentoComplementarDto = new PagamentoComplementarDto();
        pagamentoComplementarDto.idFormaPagamento = CARTAO_MASTER; // 2-Visa 3-Master

        // dados cartao credito
        let dadosCartaoHelper = new DadosCartaoHelper(new Encryptor(publicKey), "Jose da Silva", NUMERO_CARTAO_MASTER,
            CODIGO_VERIFICADOR, ANO_VALIDADE, MES_VALIDADE);
        let cartaoCreditoDadosDto = new CartaoCreditoDadosDto();
        cartaoCreditoDadosDto.nome = dadosCartaoHelper.getEncryptedName();
        cartaoCreditoDadosDto.numero = dadosCartaoHelper.getEncryptedNumber();
        cartaoCreditoDadosDto.codigoVerificador = dadosCartaoHelper.getEncryptedVerifyCode();
        cartaoCreditoDadosDto.validadeAno = dadosCartaoHelper.getEncryptedValidateYear();
        cartaoCreditoDadosDto.validadeMes = dadosCartaoHelper.getEncryptedValidateMonth();
        cartaoCreditoDadosDto.quantidadeParcelas = 1;

        pagamentoComplementarDto.dadosCartaoCredito = cartaoCreditoDadosDto;

        // dados Cartao Credito Validacao
        let cartaoCreditoDadosValidacaoDto = new CartaoCreditoDadosValidacaoDto();
        cartaoCreditoDadosValidacaoDto.nome = dadosCartaoHelper.nome;
        cartaoCreditoDadosValidacaoDto.numeroMascarado = NUMERO_CARTAO_MASTER_MASCARADO;

        cartaoCreditoDadosValidacaoDto.qtCaracteresCodigoVerificador = "4";
        cartaoCreditoDadosValidacaoDto.validadeAno = dadosCartaoHelper.anoValidade;
        cartaoCreditoDadosValidacaoDto.validadeMes = dadosCartaoHelper.mesValidade;

        pagamentoComplementarDto.dadosCartaoCreditoValidacao = cartaoCreditoDadosValidacaoDto;

        // pagamento complementar
        pagamentoComplementarDto.valorComplementar = 30.0;
        pagamentoComplementarDto.valorComplementarComJuros = 30.0;

        // dados entrega
        let dadosEntrega = new EntregaDadosDto();
        dadosEntrega.valorFrete = pedidoComCartaoHelper.valorFrete;

        // endereco cobranca
        let enderecoCobranca = new EnderecoCobrancaDto();
        enderecoCobranca.cep = "01546090";
        enderecoCobranca.estado = "SP";
        enderecoCobranca.logradouro = "Rua Rodrigues Bastista";
        enderecoCobranca.cidade = "São Paulo";
        enderecoCobranca.numero = 63;
        enderecoCobranca.referencia = "teste";
        enderecoCobranca.bairro = "Vila Teodoro";
        enderecoCobranca.complemento = "teste";
        enderecoCobranca.telefone = "22333333";
        enderecoCobranca.telefone2 = "22333335";
        enderecoCobranca.telefone3 = "22333336";

        pedido.produtos = produtos;
        pedido.enderecoEntrega = enderecoEntrega;
        pedido.destinatario = destinatario;
        pedido.dadosEntrega = dadosEntrega;
        pedido.enderecoCobranca = enderecoCobranca;

        let pagamentoComplementarDtoList = new Array();
        pagamentoComplementarDtoList.push(pagamentoComplementarDto);
        pedido.pagtosComplementares = pagamentoComplementarDtoList;

        pedido.valorTotalPedido = pedidoComCartaoHelper.getTotalPedido();
        pedido.valorTotalComplementar = 30.0;
        pedido.valorTotalComplementarComJuros = 30.0;

        return pedidoApi.postCriarPedido(pedido).then(criacaoPedidoDTO => {
            //console.log("Response:");
            //console.log(criacaoPedidoDTO);

            let valueExpected = pedidoComCartaoHelper.getTotalPedido();
            assert.equal(criacaoPedidoDTO.data.valorTotalPedido, valueExpected);

            // complementa dados do Pedido para utilizar nos outros metodos
            pedidoComCartaoHelper.idPedido = criacaoPedidoDTO.data.codigoPedido;
            pedidoComCartaoHelper.idPedidoParceiro = criacaoPedidoDTO.data.pedidoParceiro;
        });
    });


    it("5-Deveria cancelar o pedido", function () {
        this.timeout(10000);
        let dto = new ConfirmacaoReqDTO();
        dto.idCampanha = ID_CAMPANHA;
        dto.idPedidoParceiro = pedidoHelper.idPedidoParceiro;
        dto.cancelado = true;
        dto.confirmado = false;
        dto.idPedidoMktplc = "1-01";
        dto.motivoCancelamento = "teste";
        dto.parceiro = "BANCO INTER";

        //console.log(dto);
        //console.log(pedidoHelper.idPedido);
        return pedidoApi.patchPedidosCancelamentoOrConfirmacao(dto, pedidoHelper.idPedido).then(confirmacaoDto => {
            //console.log("Response:");
            //console.log(confirmacaoDto);
            //console.log("confirmacaoDto.data.pedidoCancelado:");
            //console.log(confirmacaoDto.data.pedidoCancelado);

            assert.isTrue(confirmacaoDto.data.pedidoCancelado);
        });
    });

    it("6-Deveria confirmar o pedido", function () {
        this.timeout(10000);
        let dto = new ConfirmacaoReqDTO();
        dto.idCampanha = ID_CAMPANHA;
        dto.idPedidoParceiro = pedidoComCartaoHelper.idPedidoParceiro;
        dto.confirmado = true;

        return pedidoApi.patchPedidosCancelamentoOrConfirmacao(dto, pedidoComCartaoHelper.idPedido).then(confirmacaoDto => {
            assert.isTrue(confirmacaoDto.data.pedidoConfirmado);
        });
    });

    it("7-Deveria retornar os dados do pedido do parceiro", function () {
        this.timeout(10000);
        let queryParams = new Map();
        queryParams.set("request.idCompra", pedidoHelper.idPedido);
        queryParams.set("request.cnpj", CNPJ);
        queryParams.set("request.idCampanha", ID_CAMPANHA);
        queryParams.set("request.idPedidoParceiro", pedidoHelper.idPedidoParceiro);

        return pedidoApi.getDadosPedidoParceiro(pedidoHelper.idPedido, queryParams).then(pedido => {
            assert.equal(pedido.data.pedido.codigoPedido, pedidoHelper.idPedido);
        });
    });

    it("8-Deveria retornar o PDF da nota fiscal", function () {
        let pathParams = new Map();
		pathParams.set("idCompra", "247473612");
		pathParams.set("idCompraEntrega", "91712686");
		pathParams.set("formato", "PDF");
        return pedidoApi.getNotaFiscalPedido(pathParams).catch(pedido => {
            //assert.isNotNull(pedido);
           //TODO        
        });
    });

    it("9-Deveria retornar erro ao tentar pegar os dados do pedido do parceiro sem passar o id compra", function () {
        this.timeout(10000);
        let queryParams = new Map();
        queryParams.set("request.idCompra", pedidoHelper.idPedido);
        queryParams.set("request.cnpj", CNPJ);
        queryParams.set("request.idCampanha", ID_CAMPANHA);
        queryParams.set("request.idPedidoParceiro", pedidoHelper.idPedidoParceiro);
        return pedidoApi.getDadosPedidoParceiro(null, queryParams).catch(erro => {
            assert.isNotNull(erro);
        });
    });

    it("10-Deveria retornar erro ao tentar calcular carrinho sem passar o body", function () {
        this.timeout(10000);
        return pedidoApi.postCalcularCarrinho(null).catch(erro => {
            assert.isNotNull(erro);
        });
    });

    it("11-Deveria retornar erro ao tentar confirmar o pedido sem passar o body", function () {
        this.timeout(10000);
        return pedidoApi.patchPedidosCancelamentoOrConfirmacao(null, pedidoComCartaoHelper.idPedido).catch(erro => {
            assert.isNotNull(erro);
        });
    });

    it("12-Deveria retornar erro ao tentar confirmar o pedido sem passar o id pedido", function () {
        this.timeout(10000);
        let dto = new ConfirmacaoReqDTO();
        dto.idCampanha = ID_CAMPANHA;
        dto.idPedidoParceiro = pedidoComCartaoHelper.idPedidoParceiro;
        dto.confirmado = true;
        return pedidoApi.patchPedidosCancelamentoOrConfirmacao(dto, null).catch(erro => {
            assert.isNotNull(erro);
        });
    });

    it("13-Deveria retornar erro o tentar download do PDF da nota fiscal sem passar parametros", function () {
        return pedidoApi.getNotaFiscalPedido(null).catch(erro => {
            assert.isNotNull(erro);
        });
    });

    it("14-Deveria  retornar erro o tentar criar pedido sem body", function () {
        return pedidoApi.postCriarPedido(null).catch(erro => {
            assert.isNotNull(erro);
        });
    });


});//describe

function geraPedidoParceiroId() {
    return Math.floor((Math.random() * 100000) + 1)
}