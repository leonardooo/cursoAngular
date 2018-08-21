import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  @Input()
  valor = 0;

  @Output()
  mudou = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  incrementa() {
    this.valor++;
    this.emitirEvento();
  }

  decrementa() {
    this.valor--;
    this.emitirEvento();
  }

  private emitirEvento() {
    this.mudou.emit({novoValor: this.valor});
  }

}
