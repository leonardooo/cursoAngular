import { DiceProbsComponent } from './dice-probs/dice-probs.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { MDPedidosComponent } from './mdpedidos/mdpedidos.component';
import { PedidoDetalheComponent } from './pedido-detalhe/pedido-detalhe.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursoComponent } from './curso/curso.component';
import { CursosComponent } from './cursos/cursos.component';
import { ContadorComponent } from './contador/contador.component';

const APP_ROUTES: Routes = [
    { path: 'cursos', component: CursosComponent },
    { path: 'cursos/:id', component: CursoComponent },
    { path: 'home', component: ContadorComponent },
    { path: 'pedidos', component: MDPedidosComponent },
    { path: 'pedidos/:id', component: PedidoDetalheComponent },
    { path: 'pipes', component: ExemplosPipesComponent },
    { path: 'dice', component: DiceProbsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
