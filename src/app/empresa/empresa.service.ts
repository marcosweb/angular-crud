import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class EmpresaService {

  constructor(private http: Http) { }

  listaEmpresas(): Observable<any> {
    return this.http.get('http://api.twopix/empresas')
      .map((response: Response) => {
        return response.json().empresas;
    });
  }

  adicionarEmpresa(cnpj: string, razao_social: string) {
    const body = JSON.stringify({cnpj:cnpj,razao_social:razao_social});
    const headers = new Headers({'Content-Type':'application/json'});
    return this.http.post('http://api.twopix/empresa', body, {headers:headers});
  }

  atualizaEmpresa(id: number, cnpj: string, razao_social: string) {
    const body = JSON.stringify({cnpj:cnpj,razao_social:razao_social});
    const headers = new Headers({'Content-Type':'application/json'});
    return this.http.put('http://api.twopix/empresa/' + id, body, {headers:headers})
      .map(
        (response: Response) => response.json()
      )
  }

  excluiEmpresa(id: number) {
    return this.http.delete('http://api.twopix/empresa/' + id);
  }
}
