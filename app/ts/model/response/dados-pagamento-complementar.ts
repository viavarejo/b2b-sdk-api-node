import { PagamentoComplementarDto } from "../request/pagamento-complementar-dto";
import { Pagamento } from "../request/pagamento.js";

export class DadosPagamentoComplementar {
    private pagamentos: Pagamento;
    private valorTotalComplementar: number;
    private valorTotalComplementarComJuros: number;

    public getPagamentos(): Pagamento {
        return this.pagamentos;
    }

    public setPagamentos(pagamentos: Pagamento): void {
        this.pagamentos = pagamentos;
    }

    public getValorTotalComplementar(): number {
        return this.valorTotalComplementar;
    }

    public setValorTotalComplementar(valorTotalComplementar: number): void {
        this.valorTotalComplementar = valorTotalComplementar;
    }

    public getValorTotalComplementarComJuros(): number {
        return this.valorTotalComplementarComJuros;
    }

    public setValorTotalComplementarComJuros(valorTotalComplementarComJuros: number): void {
        this.valorTotalComplementarComJuros = valorTotalComplementarComJuros;
    }

}