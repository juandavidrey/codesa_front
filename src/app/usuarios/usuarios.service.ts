import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { UsuariosInterface } from './usuarios.interface';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  urlUsuarios = environment.urlUsuarios;
  urlConsultar = environment.urlConsultar;

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<UsuariosInterface[]> {
    console.log('getUsuarios');
    return this.http.get<UsuariosInterface[]>(this.urlUsuarios);
  }

  consultar(nombre: string): Observable<UsuariosInterface[]> {
    console.log('consultar', nombre);
    return this.http.get<UsuariosInterface[]>(this.urlConsultar + nombre);
  }
}
