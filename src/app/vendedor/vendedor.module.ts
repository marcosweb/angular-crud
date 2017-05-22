import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './../app.routing';

import { VendedorComponent } from './vendedor/vendedor.component';
import { VendedorListarComponent } from './listar/listar.component';
import { VendedorCadastrarComponent } from './cadastrar/cadastrar.component';
import { VendedorService } from './vendedor.service';

import { EmpresaModule } from './../empresa/empresa.module';
import { EmpresaService } from './../empresa/empresa.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    routing,
    EmpresaModule
  ],
  declarations: [
    VendedorComponent,
    VendedorListarComponent,
    VendedorCadastrarComponent
  ],
  providers: [VendedorService, EmpresaService]
})
export class VendedorModule { }
