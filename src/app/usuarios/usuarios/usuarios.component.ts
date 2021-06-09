import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios.service';
import { UsuariosInterface } from '../usuarios.interface';
import { finalize } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@app/@core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { FormControl } from '@angular/forms';

@UntilDestroy()
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent implements OnInit {
  // usuarios: UsuariosInterface = new UsuariosInterface();
  usuariosData: UsuariosInterface[];
  nombre = new FormControl('');
  nombreConsulta: string;
  ColumnMode = ColumnMode;

  constructor(private usuriosService: UsuariosService) {
    // this.nombre.valueChanges.subscribe(value => this.nombreConsulta = value)
  }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios() {
    console.log('UsuariosComponent');

    const usuarios$ = this.usuriosService.getUsuarios();
    usuarios$
      .pipe(
        finalize(() => {}),
        untilDestroyed(this)
      )
      .subscribe(
        (respuesta) => {
          console.log('getUsuarios :', respuesta);

          this.usuariosData = respuesta;
        },
        (error) => {
          console.log('Error pipe line');
        }
      );
  }

  consultar() {
    console.log('consultar ' + this.nombre.value);
    console.log('UsuariosComponent');

    const usuarios$ = this.usuriosService.consultar(this.nombre.value);
    usuarios$
      .pipe(
        finalize(() => {}),
        untilDestroyed(this)
      )
      .subscribe(
        (respuesta) => {
          console.log('getUsuarios :', respuesta);

          this.usuariosData = respuesta;
        },
        (error) => {
          console.log('Error pipe line');
        }
      );
  }

  limpiar() {
    this.nombre.setValue('');
    this.getUsuarios();
  }
}
