import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class VendedorService {

  constructor(private http: Http) { }

  mostraVendedor(id): Observable<any> {
    console.log(id);
    return this.http.get('http://endpoint.marcosweb.com.br/vendedor/' + id)
      .map((response: Response) => {
        console.log(response.json().vendedores);
        return response.json().vendedor;
    });
  }

  listaVendedores(empresa): Observable<any> {
    const url = empresa ? 'http://endpoint.marcosweb.com.br/vendedores/' + empresa : 'http://endpoint.marcosweb.com.br/vendedores';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json();
    });
  }

  adicionarVendedor(nome: string, idade: number, empresa: number ) {
    const body = JSON.stringify({nome:nome, idade:idade, empresa: empresa});
    const headers = new Headers({'Content-Type':'application/json'});
    return this.http.post('http://endpoint.marcosweb.com.br/vendedor', body, {headers:headers});
  }

  atualizaVendedor(id: number, nome: string, idade: number, empresa: number) {
    const body = JSON.stringify({nome:nome,idade:idade,empresa:empresa});
    const headers = new Headers({'Content-Type':'application/json'});
    return this.http.put('http://endpoint.marcosweb.com.br/vendedor/' + id, body, {headers:headers})
      .map(
        (response: Response) => response.json()
      )
  }

  excluiVendedor(id: number) {
    return this.http.delete('http://endpoint.marcosweb.com.br/vendedor/' + id);
  }
}
