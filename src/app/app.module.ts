
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { EmpresaModule } from './empresa/empresa.module';
import { VendedorModule } from './vendedor/vendedor.module';
import { Pagina404Component } from './pagina404/pagina404.component';
import { HelperService } from './helper.service';

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
  providers: [HelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
