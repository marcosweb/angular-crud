
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './../app.routing';
import { EmpresaComponent } from './empresa/empresa.component';
import { EmpresaListarComponent } from './listar/listar.component';
import { EmpresaCadastrarComponent } from './cadastrar/cadastrar.component';
import { EmpresaService } from './empresa.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    EmpresaComponent,
    EmpresaListarComponent,
    EmpresaCadastrarComponent
  ],
  providers: [EmpresaService]
})
export class EmpresaModule { }
