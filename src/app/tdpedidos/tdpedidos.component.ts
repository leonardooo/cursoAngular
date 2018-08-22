import { Component, OnInit } from '@angular/core';

class Produto {
  nome: string;
  valor: number;
  constructor(nome: string, valor: number) {
      this.nome = nome;
      this.valor = valor;
  }
}

class Pagamento {
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

@Component({
  selector: 'app-tdpedidos',
  templateUrl: './tdpedidos.component.html',
  styleUrls: ['./tdpedidos.component.css']
})
export class TDPedidosComponent implements OnInit {

  produtos: Produto[];
  pagamentos: Pagamento[];
  pedido: Pedido;
  pedidos: Pedido[];
  comprado: boolean;

  constructor() {
    this.initProdutos();
    this.initPagamentos();
    this.comprado = false;
    this.pedidos = [];
  }

  ngOnInit() {}

  comprar(value: any) {
    this.pedido = new Pedido(
      this.produtos[+value.produtosSelect],
      +value.quantidadeSelect,
      this.pagamentos[+value.descontoSelect]
    );

    this.pedidos.push(this.pedido);
    this.comprado = true;
  }

  getProdutosSelect() {
    const opcoes: string[] = [];
    for (const opcao of this.produtos) {
      opcoes.push(opcao.nome + ' - ' + opcao.valor);
    }
    return opcoes;
  }

  getPagamentosSelect() {
    const opcoes: string[] = [];
    for (const opcao of this.pagamentos) {
      opcoes.push(opcao.tipo + ' - ' + (opcao.desconto * 100) + '%');
    }
    return opcoes;
  }

  getTotalPedidos() {
    let contador = 0.0;
    for (const p of this.pedidos) {
      contador += +p.valorTotalComDesconto;
    }
    return contador.toFixed(2);
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
