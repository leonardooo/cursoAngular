import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CelciusComponent } from './celcius/celcius.component';
import { CursoComponent } from './curso/curso.component';
import { TesteCursoComponent } from './teste-curso/teste-curso.component';
import { ContadorComponent } from './contador/contador.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FerramentasComponent } from './ferramentas/ferramentas.component';
import { PedidosComponent } from './pedidos/pedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    DataBindingComponent,
    CelciusComponent,
    CursoComponent,
    TesteCursoComponent,
    ContadorComponent,
    CalculadoraComponent,
    FerramentasComponent,
    PedidosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
