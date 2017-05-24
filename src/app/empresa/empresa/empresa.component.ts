import { Http } from '@angular/http';
// import { Response } from '@angular/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Empresa } from './../empresa.interface';
import { EmpresaService } from './../empresa.service';
import { HelperService } from './../../helper.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  @Input() empresa: Empresa;
  @Output() empresaExcluida = new EventEmitter<Empresa>();
  editar: boolean = false;
  campoRazaoSocial: string = '';
  campoCnpj: string = '';
  erros: string[];
  mostraErro: boolean = false;
  
  constructor(
    private empresaService: EmpresaService,
    private helper: HelperService
  ) { }

  ngOnInit() {
  }

  onEditar() {
    this.editar = true;
    this.mostraErro = false;
    this.campoCnpj = this.empresa.cnpj;
    this.campoRazaoSocial = this.empresa.razao_social;
  }

  onSalvar() {
    this.empresaService.atualizaEmpresa(
      this.empresa.id, 
      this.campoCnpj, 
      this.campoRazaoSocial
    ).subscribe(
      (response) => {
        this.erros = response.erro || null;
        if (this.erros !== null) {
          this.erros = this.helper.getError(this.erros);
          this.mostraErro = true;
          return this;
        }
        this.editar = false;
        this.empresa.cnpj = this.campoCnpj;
        this.empresa.razao_social = this.campoRazaoSocial;
        this.campoCnpj = '';
        this.campoRazaoSocial = '';
      }
    )
    
  }

  onCancelar() {
    this.editar = false;
    this.campoCnpj = '';
    this.campoRazaoSocial = '';
  }

  onExcluir() {
    this.empresaService.excluiEmpresa(this.empresa.id).subscribe(
      () => {
        this.empresaExcluida.emit(this.empresa);
        console.log('A Empresa foi excluída!');
      }
    );
  }

}
