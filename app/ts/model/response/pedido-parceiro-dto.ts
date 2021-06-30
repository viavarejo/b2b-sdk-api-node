import { PedidoParceiro } from "./pedido-parceiro.js";
import { EnderecoCobrancaDto } from "./endereco-cobranca-dto.js";
import { Destinatario } from "./destinatario.js";
import { Entrega } from "./entrega.js";

export class PedidoParceiroDTO {
    private pedido: PedidoParceiro;
    private endereco: EnderecoCobrancaDto;
    private destinatario: Destinatario;
    private entregas: Entrega;

    public getPedido(): PedidoParceiro {
        return this.pedido;
    }

    public setPedido(pedido: PedidoParceiro): void {
        this.pedido = pedido;
    }

    public getEndereco(): EnderecoCobrancaDto {
        return this.endereco;
    }

    public setEndereco(endereco: EnderecoCobrancaDto): void {
        this.endereco = endereco;
    }

    public getDestinatario(): Destinatario {
        return this.destinatario;
    }

    public setDestinatario(destinatario: Destinatario): void {
        this.destinatario = destinatario;
    }

    public getEntregas(): Entrega {
        return this.entregas;
    }

    public setEntregas(entregas: Entrega): void {
        this.entregas = entregas;
    }

}