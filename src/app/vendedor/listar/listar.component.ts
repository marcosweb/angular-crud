import { Component, OnInit, OnDestroy, Output } from '@angular/core';
import { ActivatedRoute, Router, Params } from "@angular/router";

import { Vendedor } from './../vendedor.interface';
import { VendedorService } from './../vendedor.service';
import { Empresa } from './../../empresa/empresa.interface';

@Component({
  selector: 'vendedores-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class VendedorListarComponent implements OnInit {

  vendedores: Vendedor[];
  empresas: Empresa[];
  nomeEmpresa: String = '';

  constructor(
    private vendedorService: VendedorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    var empresaId;
    this.route.params.subscribe(params => {
      empresaId = +params['empresa'] || 0;
    });
    this.vendedorService.listaVendedores(empresaId)
      .subscribe(
        (data) => {
          this.vendedores = data.vendedores;
          this.nomeEmpresa = data.razao_social ? 'da empresa ' + data.razao_social : '';
        },
        (error: Response) => console.log(error)
      );
  }

  onVendedorExcluido(vendedor: Vendedor) {
    const posicao = this.vendedores.findIndex(
      (emp: Vendedor) => {
        return emp.id == vendedor.id;
      });
      this.vendedores.splice(posicao,1);
  }

}
