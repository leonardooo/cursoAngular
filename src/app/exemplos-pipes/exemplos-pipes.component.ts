import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})

export class ExemplosPipesComponent implements OnInit {
  livro: any = {
    titulo: 'o hobbit',
    estrelas: 4.53524,
    preco: 57.70,
    lancamento: new Date(1937, 8, 21)
  };

  ngOnInit() {
  }
}
