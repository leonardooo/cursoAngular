import { Curso } from './../model/curso';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CursosService {

  cursos: any;

  constructor(private http: HttpClient) { }

  getCursos(): Observable<any> {
    return this.http.get('http://localhost:3000/api/cursos');
  }

  consultar(index: number): string {
    return '';
  }
}
