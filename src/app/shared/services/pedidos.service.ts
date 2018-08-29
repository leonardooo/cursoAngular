import { Injectable } from '@angular/core';

export class Produto {
  nome: string;
  valor: number;
  constructor(nome: string, valor: number) {
      this.nome = nome;
      this.valor = valor;
  }
}

export class Pagamento {
  tipo: string;
  desconto: number;
  constructor(tipo: string, desconto: number) {
      this.tipo = tipo;
      this.desconto = desconto;
  }

}

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

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  produtos: Produto[];
  pagamentos: Pagamento[];
  pedidos: Pedido[];

  constructor() {
    this.pedidos = [];
    this.initPagamentos();
    this.initProdutos();
  }

  public removerPedido(indice: number) {
    this.pedidos.splice(indice, 1);
  }

  public consultar(indice: number): Pedido {
    return this.pedidos[indice];
  }

  private initProdutos() {
    this.produtos = [];
    this.produtos.push( new Produto('Erva', 10.99) );
    this.produtos.push( new Produto('Pimenta', 1.99) );
    this.produtos.push( new Produto('Acelga', 4.99) );
    this.produtos.push( new Produto('Batata', 6.99) );
    this.produtos.push( new Produto('Cerveja', 15.99) );
  }

  private initPagamentos() {
    this.pagamentos = [];
    this.pagamentos.push( new Pagamento('À vista', 0.1) );
    this.pagamentos.push( new Pagamento('Boleto', 0.05) );
    this.pagamentos.push( new Pagamento('Débito', 0.03) );
    this.pagamentos.push( new Pagamento('Crédito', 0.0) );
  }
}
