
import { Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { EmpresaService } from './../empresa.service';
import { HelperService } from './../../helper.service';

@Component({
  selector: 'empresa-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class EmpresaCadastrarComponent implements OnInit {

  erros: string[];
  mostraErro: boolean = false;

  constructor(
    private empresaService: EmpresaService,
    private helper: HelperService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.mostraErro = false;
    this.empresaService.adicionarEmpresa(
      form.value.cnpj,
      form.value.razao_social
    ).subscribe(
      (response: Response) => {
        this.erros = response.json().erro || null;
        if (this.erros !== null) {
          this.erros = this.helper.getError(this.erros);
          this.mostraErro = true;
          return this;
        }
        alert('A Empresa ' + response.json().empresa.razao_social + ' foi adicionada!');
        this.router.navigate(['/empresas']);
      }
    );
    form.reset();
  }
}
