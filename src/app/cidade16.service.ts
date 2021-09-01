import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Cidade16Service {

  constructor(
    private httpClient: HttpClient
  ) { }

  consultar () : Promise<any>{
    return this.httpClient.get('http://localhost:3000/cidades').toPromise();
  }

  adicionar(cidade : any) : Promise<any>{
    return this.httpClient.post('http://localhost:3000/cidades',cidade).toPromise();
  }

  remover(id : number){
    return this.httpClient.delete(`http://localhost:3000/cidades/${id}`).toPromise();
  }
  atualizar(cidade : any) : Promise<any>{
    return this.httpClient.put(`http://localhost:3000/cidades/${cidade.id}3`, cidade).toPromise().
    catch(error =>{ return Promise.reject('Erro ao alterar cidade '+cidade.id)});
  }
}
