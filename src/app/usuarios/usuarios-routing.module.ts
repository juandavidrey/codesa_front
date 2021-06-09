import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'usuarios', component: UsuariosComponent, data: { title: marker('Usuarios') } }]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosRoutingModule {}
