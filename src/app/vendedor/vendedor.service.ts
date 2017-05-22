import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class VendedorService {

  constructor(private http: Http) { }

  mostraVendedor(id): Observable<any> {
    console.log(id);
    return this.http.get('http://api.twopix/vendedor/' + id)
      .map((response: Response) => {
        console.log(response.json().vendedores);
        return response.json().vendedor;
    });
  }

  listaVendedores(empresa): Observable<any> {
    const url = empresa ? 'http://api.twopix/vendedores/' + empresa : 'http://api.twopix/vendedores';
    return this.http.get(url)
      .map((response: Response) => {
        return response.json().vendedores;
    });
  }

  adicionarVendedor(nome: string, idade: number, empresa: number ) {
    const body = JSON.stringify({nome:nome, idade:idade, empresa: empresa});
    const headers = new Headers({'Content-Type':'application/json'});
    return this.http.post('http://api.twopix/vendedor', body, {headers:headers});
  }

  atualizaVendedor(id: number, nome: string, idade: number, empresa: number) {
    const body = JSON.stringify({nome:nome,idade:idade,empresa:empresa});
    const headers = new Headers({'Content-Type':'application/json'});
    return this.http.put('http://api.twopix/vendedor/' + id, body, {headers:headers})
      .map(
        (response: Response) => response.json()
      )
  }

  excluiVendedor(id: number) {
    return this.http.delete('http://api.twopix/vendedor/' + id);
  }
}
