import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-celcius',
  templateUrl: './celcius.component.html',
  styleUrls: ['./celcius.component.css']
})
export class CelciusComponent implements OnInit {

  celcius: string;
  calculado = false;
  erro = false;

  constructor() { }

  ngOnInit() {
  }

  converter(): void {
    console.log(this.celcius);
    const temp = Number.parseFloat(this.celcius);
    if (Number.isNaN(temp)) {
      this.erro = true;
      return;
    }
    this.celcius = ((temp - 32) * 5 / 9).toFixed(2);
    this.calculado = true;
  }

  limpar(): void {
    this.erro = false;
    this.calculado = false;
  }

  trunc(num: number): number {
    num = num * 100;
    num = Number.parseInt(num.toString());
    return num / 100;
  }

}
