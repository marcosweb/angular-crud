
import { Component, OnInit } from '@angular/core';

import { Empresa } from './../empresa.interface';
import { EmpresaService } from './../empresa.service';

@Component({
  selector: 'empresas-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class EmpresaListarComponent implements OnInit {

  empresas: Empresa[];

  constructor(private empresaService: EmpresaService) { }

  ngOnInit() {
    this.empresaService.listaEmpresas()
      .subscribe(
        (emp: Empresa[]) => this.empresas = emp,
        (error: Response) => console.log(error)
      );
  }

  onEmpresaExcluida(empresa: Empresa) {
    const posicao = this.empresas.findIndex(
      (emp: Empresa) => {
        return emp.id == empresa.id;
      });
      this.empresas.splice(posicao, 1);
  }

}
