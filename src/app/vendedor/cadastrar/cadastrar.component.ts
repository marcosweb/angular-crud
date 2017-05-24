
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Response } from '@angular/http';
import { NgForm, FormsModule } from '@angular/forms';

import { VendedorService } from './../vendedor.service';

import { Empresa } from './../../empresa/empresa.interface';
import { EmpresaService } from './../../empresa/empresa.service';
import { HelperService } from './../../helper.service';

@Component({
  selector: 'vendedor-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class VendedorCadastrarComponent implements OnInit {

  empresas: Empresa[];
  erros: string[];
  mostraErro: boolean = false;

  constructor(
    private vendedorService: VendedorService,
    private empresaService: EmpresaService,
    private helper: HelperService,
    private router: Router
  ) { }

  ngOnInit() {
    this.empresaService.listaEmpresas().
      subscribe(
        (emp: Empresa[]) => this.empresas = emp,
        (error: Response) => console.log(error)
      );
  }

  onSubmit(form: NgForm) {
    this.mostraErro = false;
    this.vendedorService.adicionarVendedor(
      form.value.nome,
      form.value.idade,
      form.value.empresa
    ).subscribe(
      (response: Response) => {
        this.erros = response.json().erro || null;
        if (this.erros !== null) {
          this.erros = this.helper.getError(this.erros);
          this.mostraErro = true;
          return this;
        }
        alert('O Vendedor ' + response.json().vendedor.nome + ' foi adicionado!');
        this.router.navigate(['/vendedores']);
      }
    );
    form.reset();
  }
  
}
