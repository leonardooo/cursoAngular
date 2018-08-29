import { ActivatedRoute } from '@angular/router';
import { Pedido } from './../pedidos/pedido';
import { PedidosService } from './../shared/services/pedidos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido-detalhe',
  templateUrl: './pedido-detalhe.component.html',
  styleUrls: ['./pedido-detalhe.component.css']
})
export class PedidoDetalheComponent implements OnInit {

  pedido: Pedido;

  constructor(private route: ActivatedRoute, private service: PedidosService) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.pedido = this.service.consultar(+params['id']);
      }
    );
  }

}
