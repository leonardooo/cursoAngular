import { PedidosService, Pedido, Produto, Pagamento } from './../shared/services/pedidos.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder,
  ValidationErrors, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mdpedidos',
  templateUrl: './mdpedidos.component.html',
  styleUrls: ['./mdpedidos.component.css']
})
export class MDPedidosComponent implements OnInit {

  form: FormGroup;

  pedido: Pedido;
  comprado: boolean;

  constructor(private router: Router, private formBuilder: FormBuilder, private pedidosService: PedidosService) {
    this.comprado = false;
  }

  ngOnInit() {
    this.buildForm();
  }

  comprar() {
    const value = this.form.value;
    this.pedido = new Pedido(
      this.pedidosService.produtos[+value.produto],
      +value.quantidade,
      this.pedidosService.pagamentos[+value.desconto]
    );

    this.pedidosService.pedidos.push(this.pedido);
    this.comprado = true;
  }

  removerPedido(indice: string) {
    this.pedidosService.removerPedido( Number.parseInt(indice) );
  }

  detalharPedido(indice: string) {
    this.router.navigate(['/pedidos/' + indice]);
  }

  getProdutosSelect() {
    const opcoes: string[] = [];
    for (const opcao of this.pedidosService.produtos) {
      opcoes.push(opcao.nome + ' - ' + opcao.valor);
    }
    return opcoes;
  }

  getPagamentosSelect() {
    const opcoes: string[] = [];
    for (const opcao of this.pedidosService.pagamentos) {
      opcoes.push(opcao.tipo + ' - ' + (opcao.desconto * 100) + '%');
    }
    return opcoes;
  }

  getTotalPedidos() {
    let contador = 0.0;
    for (const p of this.pedidosService.pedidos) {
      contador += +p.valorTotalComDesconto;
    }
    return contador.toFixed(2);
  }

  getPedidos() {
    return this.pedidosService.pedidos;
  }

  buildForm() {
    this.form = this.formBuilder.group({
      produto: [null, Validators.required],
      quantidade: [null, [Validators.required, validarQuantidadeFactory(1, 50)]],
      desconto: [null, Validators.required]
    });
  }
}

function validarQuantidadeFactory(min: number, max: number) {
  return (c: AbstractControl): ValidationErrors|null => {
    return (+c.value >= min && +c.value <= max) ? null
       : { vlInvalido : 'Quantidade tem que ser entre ' + min + ' e ' + max };
  };
}
