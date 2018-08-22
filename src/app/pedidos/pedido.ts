import { Produto } from './produto';
import { Pagamento } from './pagamento';

export class Pedido {

    produto: Produto;
    quantidade: number;
    pagamento: Pagamento;

    constructor(produto: Produto, quantidade: number, pagamento: Pagamento) {
        this.produto = produto;
        this.quantidade = quantidade;
        this.pagamento = pagamento;
    }

    get valorTotalComDesconto() {
        const valor = this.produto.valor * this.quantidade;
        return (valor - (valor * this.pagamento.desconto)).toFixed(2);
    }

    get valorTotal() {
        return (this.produto.valor * this.quantidade).toFixed(2);
    }

    get valorDesconto() {
        const valor = this.produto.valor * this.quantidade;
        return (valor * this.pagamento.desconto).toFixed(2);
    }

}
