import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { EmpresaListarComponent } from './empresa/listar/listar.component';
import { EmpresaCadastrarComponent } from './empresa/cadastrar/cadastrar.component';
import { VendedorListarComponent } from './vendedor/listar/listar.component';
import { VendedorCadastrarComponent } from './vendedor/cadastrar/cadastrar.component';
import { Pagina404Component } from './pagina404/pagina404.component';

const APP_ROUTES: Routes = [
    { path: 'empresas', component: EmpresaListarComponent },
    { path: 'cadastrar-empresa', component: EmpresaCadastrarComponent },
    { path: 'vendedores', component: VendedorListarComponent },
    { path: 'vendedor/:id', component: VendedorListarComponent },
    { path: 'vendedores/:empresa', component: VendedorListarComponent },
    { path: 'cadastrar-vendedor', component: VendedorCadastrarComponent },
    { path: '', redirectTo: '/empresas', pathMatch: 'full' },
    { path: '**', component: Pagina404Component }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);