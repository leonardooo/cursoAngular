import { CursosService } from './../shared/services/cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[];
  idCurso = '1';

  constructor(private cursosService: CursosService) { }

  ngOnInit() {
    this.cursosService.getCursos().subscribe(
      response => {
        console.log(response);
        this.cursos = response;
      }
    );
  }

}
