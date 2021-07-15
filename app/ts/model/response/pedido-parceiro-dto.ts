import { PedidoParceiro } from "./pedido-parceiro";
import { EnderecoCobrancaDto } from "./endereco-cobranca-dto";
import { Destinatario } from "./destinatario";
import { Entrega } from "./entrega";

export class PedidoParceiroDTO {
    public pedido: PedidoParceiro;
    public endereco: EnderecoCobrancaDto;
    public destinatario: Destinatario;
    public entregas: Entrega;

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