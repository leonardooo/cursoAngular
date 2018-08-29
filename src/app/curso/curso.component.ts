import { CursosService } from './../shared/services/cursos.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit, OnDestroy {

  @Input('nome')
  nome: string;

  subs: Subscription;

  constructor(private route: ActivatedRoute, private service: CursosService) { }

  ngOnInit() {
    this.subs = this.route.params.subscribe(
      params => {
        this.nome = this.service.consultar( +params['id'] );
      }
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
