
import { Http } from '@angular/http';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Vendedor } from './../vendedor.interface';
import { VendedorService } from './../vendedor.service';

import { Empresa } from './../../empresa/empresa.interface';
import { EmpresaService } from './../../empresa/empresa.service';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})
export class VendedorComponent implements OnInit {

  @Input() vendedor: Vendedor;
  @Output() vendedorExcluido = new EventEmitter<Vendedor>();
  empresas: Empresa[];
  selectedValue: number = null;
  editar: boolean = false;
  campoNome: string = '';
  campoIdade: number;
  campoEmpresa: number;
  
  constructor(
    private vendedorService: VendedorService,
    private empresaService: EmpresaService
  ) { }

  ngOnInit() {
    this.empresaService.listaEmpresas().
      subscribe(
        (emp: Empresa[]) => this.empresas = emp,
        (error: Response) => console.log(error)
      );
  }

  onEditar(e) {
    this.editar = true;
    this.campoNome = this.vendedor.nome;
    this.campoIdade = this.vendedor.idade;
    this.campoEmpresa = this.vendedor.empresa;
    this.selectedValue = this.vendedor.empresa;
  }

  onSalvar() {
    this.vendedorService.atualizaVendedor(
      this.vendedor.id, 
      this.campoNome, 
      this.campoIdade,
      this.selectedValue
    ).subscribe(
      () => {
        this.vendedor.nome = this.campoNome;
        this.vendedor.idade = this.campoIdade;
        this.vendedor.empresa = this.selectedValue;
        this.campoNome = '';
        this.campoIdade = null;
        this.campoEmpresa = null;
      }
    )
    this.editar = false;
  }

  onCancelar() {
    this.editar = false;
    this.campoNome = '';
    this.campoIdade = null;
    this.campoEmpresa = null;
  }

  onExcluir() {
    this.vendedorService.excluiVendedor(this.vendedor.id).subscribe(
      () => {
        this.vendedorExcluido.emit(this.vendedor);
        console.log('O Vendedor foi excluído!');
      }
    );
  }

}