import { Component, OnInit } from '@angular/core';

class Dados {
  constructor(public titulo: string, public descricao: string) { }
}

class Curso {
  constructor(public codigo: string, public dados: Dados) { }
}

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css']
})
export class TDFormComponent implements OnInit {

  curso = new Curso('100', new Dados('Angular', 'UNISERPRO'));

  constructor() {}

  ngOnInit() {}

  onSubmit(value: any) {
    console.log(value);
  }
}
