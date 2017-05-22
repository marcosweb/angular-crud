import { Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EmpresaService } from './../empresa.service';

@Component({
  selector: 'empresa-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class EmpresaCadastrarComponent implements OnInit {

  constructor(private empresaService: EmpresaService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (form.value.cnpj.length === 0 || form.value.razao_social.length === 0){
      alert('Preencha todos os campos');
      return false;
    }
    this.empresaService.adicionarEmpresa(
      form.value.cnpj,
      form.value.razao_social
    ).subscribe(
      (response: Response) => {
        if (response.json().empresa.id === undefined) {
          alert('Erro!');
          return false;
        }
        alert('A Empresa ' + form.value.razao_social + ' foi adicionada!')
      }
    );
    form.reset();
  }
}
