import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { EmpresaModule } from './empresa/empresa.module';
import { VendedorModule } from './vendedor/vendedor.module';
import { Pagina404Component } from './pagina404/pagina404.component';

@NgModule({
  declarations: [
    AppComponent,
    Pagina404Component
  ],
  imports: [
    BrowserModule,
    routing,
    EmpresaModule,
    VendedorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
