import { Component, OnInit } from '@angular/core';
import { Produto } from './produto';
import { Pagamento } from './pagamento';
import { Pedido } from './pedido';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

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

  comprar(selectedProduto, selectedQuantidade, selectedPagamento) {
    console.log(selectedProduto + '-' + selectedQuantidade + '-' + selectedPagamento);

    const prod = this.produtos[+selectedProduto];
    const pag = this.pagamentos[+selectedPagamento];
    const quant = +selectedQuantidade;
    this.pedido = new Pedido(prod, quant, pag);
    this.pedidos.push(this.pedido);

    this.comprado = true;
  }

  getProdutosSelect() {
    let opcoes: string[] = [];
    for (let opcao of this.produtos) {
      opcoes.push(opcao.nome + ' - ' + opcao.valor);
    }
    return opcoes;
  }

  getPagamentosSelect() {
    let opcoes: string[] = [];
    for (let opcao of this.pagamentos) {
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
