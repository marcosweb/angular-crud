import { Http } from '@angular/http';

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Empresa } from './../empresa.interface';
import { EmpresaService } from './../empresa.service';

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
  
  constructor(private empresaService: EmpresaService) { }

  ngOnInit() {
  }

  onEditar() {
    this.editar = true;
    this.campoCnpj = this.empresa.cnpj;
    this.campoRazaoSocial = this.empresa.razao_social;
  }

  onSalvar() {
    this.empresaService.atualizaEmpresa(
      this.empresa.id, 
      this.campoCnpj, 
      this.campoRazaoSocial
    ).subscribe(
      () => {
        this.empresa.cnpj = this.campoCnpj;
        this.empresa.razao_social = this.campoRazaoSocial;
        this.campoCnpj = '';
        this.campoRazaoSocial = '';
      }
    )
    this.editar = false;
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
