
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Response } from '@angular/http';
import { NgForm, FormsModule } from '@angular/forms';

import { VendedorService } from './../vendedor.service';

import { Empresa } from './../../empresa/empresa.interface';
import { EmpresaService } from './../../empresa/empresa.service';

@Component({
  selector: 'vendedor-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class VendedorCadastrarComponent implements OnInit {

  empresas: Empresa[];

  constructor(
    private vendedorService: VendedorService,
    private empresaService: EmpresaService,
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
    if (
      form.value.nome.length === 0 || 
      form.value.idade.length === 0
    ){
      alert('Preencha todos os campos');
      return false;
    }
    this.vendedorService.adicionarVendedor(
      form.value.nome,
      form.value.idade,
      form.value.empresa
    ).subscribe(
      (response: Response) => {
        if (response.json().erro !== undefined) {
          alert(response.json().erro);
          return false;
        }
        if (response.json().vendedor.id === undefined) {
          alert('Erro!');
          return false;
        }
        alert('O Vendedor ' + form.value.nome + ' foi adicionado!');
        this.router.navigate(['/vendedores']);
      }
    );
    form.reset();
  }
  
}
