import { CartaoCreditoDadosDto } from "./cartao-credito-dados-dto.js";
import { CartaoCreditoDadosValidacaoDto } from "./cartao-credito-dados-validacao-dto.js";

export class PagamentoComplementarDto {
    private idFormaPagamento: number;
    private dadosCartaoCredito: CartaoCreditoDadosDto;
    private dadosCartaoCreditoValidacao: CartaoCreditoDadosValidacaoDto;
    private valorComplementarComJuros: number;
    private valorComplementar: number;

    public getIdFormaPagamento(): number {
        return this.idFormaPagamento;
    }

    public setIdFormaPagamento(idFormaPagamento: number): void {
        this.idFormaPagamento = idFormaPagamento;
    }

    public getDadosCartaoCredito(): CartaoCreditoDadosDto {
        return this.dadosCartaoCredito;
    }

    public setDadosCartaoCredito(dadosCartaoCredito: CartaoCreditoDadosDto): void {
        this.dadosCartaoCredito = dadosCartaoCredito;
    }

    public getDadosCartaoCreditoValidacao(): CartaoCreditoDadosValidacaoDto {
        return this.dadosCartaoCreditoValidacao;
    }

    public setDadosCartaoCreditoValidacao(dadosCartaoCreditoValidacao: CartaoCreditoDadosValidacaoDto): void {
        this.dadosCartaoCreditoValidacao = dadosCartaoCreditoValidacao;
    }

    public getValorComplementarComJuros(): number {
        return this.valorComplementarComJuros;
    }

    public setValorComplementarComJuros(valorComplementarComJuros: number): void {
        this.valorComplementarComJuros = valorComplementarComJuros;
    }

    public getValorComplementar(): number {
        return this.valorComplementar;
    }

    public setValorComplementar(valorComplementar: number): void {
        this.valorComplementar = valorComplementar;
    }

}