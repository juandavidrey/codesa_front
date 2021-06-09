import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [UsuariosComponent],
  imports: [CommonModule, UsuariosRoutingModule, NgxDatatableModule, FormsModule, ReactiveFormsModule, MaterialModule],
})
export class UsuariosModule {}
