import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { DataBindingComponent } from './data-binding/data-binding.component';

import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { CelciusComponent } from './celcius/celcius.component';
import { CursoComponent } from './curso/curso.component';
import { TesteCursoComponent } from './teste-curso/teste-curso.component';
import { ContadorComponent } from './contador/contador.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FerramentasComponent } from './ferramentas/ferramentas.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { TDFormComponent } from './tdform/tdform.component';
import { TDPedidosComponent } from './tdpedidos/tdpedidos.component';
import { MDFormComponent } from './mdform/mdform.component';
import { MDPedidosComponent } from './mdpedidos/mdpedidos.component';
import { CursosComponent } from './cursos/cursos.component';
import { PedidoDetalheComponent } from './pedido-detalhe/pedido-detalhe.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CapitalizePipe } from './shared/pipes/capitalize.pipe';
import { DiceProbsComponent } from './dice-probs/dice-probs.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    MeuPrimeiroComponent,
    CelciusComponent,
    CursoComponent,
    TesteCursoComponent,
    ContadorComponent,
    CalculadoraComponent,
    FerramentasComponent,
    PedidosComponent,
    TDFormComponent,
    TDPedidosComponent,
    MDFormComponent,
    MDPedidosComponent,
    CursosComponent,
    PedidoDetalheComponent,
    ExemplosPipesComponent,
    CapitalizePipe,
    DiceProbsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
