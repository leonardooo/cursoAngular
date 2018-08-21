import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ferramentas',
  templateUrl: './ferramentas.component.html',
  styleUrls: ['./ferramentas.component.css']
})
export class FerramentasComponent implements OnInit {

  resultado = 0;

  constructor() { }

  ngOnInit() {
  }

  onCalculado(evento: any) {
    console.log(evento);
    this.resultado = evento.resultado;
  }

}
