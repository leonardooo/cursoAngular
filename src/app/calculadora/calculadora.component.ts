import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  resultado = 0;
  erro = false;
  mensagemErro = '';
  cache: number;

  @Input()
  tipo = 'padrao';

  @Output()
  calculado = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  soma(op1: string, op2: string) {
    this.limpar();
    this.resultado = this.validarNumero(op1) + this.validarNumero(op2);
    this.emitirValor();
  }

  subt(op1: string, op2: string) {
    this.limpar();
    this.resultado = this.validarNumero(op1) - this.validarNumero(op2);
    this.emitirValor();
  }

  mult(op1: string, op2: string) {
    this.limpar();
    this.resultado = this.validarNumero(op1) * this.validarNumero(op2);
    this.emitirValor();
  }

  divi(op1: string, op2: string) {
    this.limpar();
    if (this.ehZero(op2)) {
      return;
    }
    this.resultado = this.validarNumero(op1) / this.validarNumero(op2);
    this.emitirValor();
  }

  pote(op1: string, op2: string) {
    this.limpar();
    this.resultado = Math.pow(this.validarNumero(op1),this.validarNumero(op2));
    this.emitirValor();
  }

  raiz(op2: string) {
    this.limpar();
    this.resultado = Math.sqrt(this.validarNumero(op2));
    this.emitirValor();
  }

  mais() {
    this.cache = this.resultado;
  }

  meno(input: any) {
    input.value = this.cache;
  }

  private validarNumero(texto: string): number {
    const num = Number.parseFloat(texto);
    if (Number.isNaN(num)) {
      this.erro = true;
      this.mensagemErro = 'Campo inválido!';
    }

    return num;
  }

  private ehZero(texto: string) {
    const num = Number.parseFloat(texto);
    if (num === 0) {
      this.erro = true;
      this.mensagemErro = 'Operação inválida! Divisão por zero!';
    }

    return num === 0;
  }

  limpar() {
    this.erro = false;
    this.mensagemErro = '';
  }

  private emitirValor() {
    this.calculado.emit({resultado: this.resultado});
  }
}
