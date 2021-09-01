import { Cidade16Service } from './../cidade16.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-capitulo16',
  templateUrl: './capitulo16.component.html',
  styleUrls: ['./capitulo16.component.css']
})
export class Capitulo16Component  implements OnInit {


  constructor(private cidade16Service: Cidade16Service){

  }
  ngOnInit(){
    this.consultar();
  }
  cidades  = [
    { id: 1, nome: 'Uberlândia' },
    { id: 2, nome: 'São Paulo' },
    { id: 3, nome: 'Florianópolis' },
    { id: 4, nome: 'Curitiba' }
  ];

  adicionar(nome: string) {
    this.cidade16Service.adicionar({"nome": nome}).then(cidade =>{
      alert(`Cidade ${cidade.nome} adicionada com o código ${cidade.id}`);
      this.consultar();
    });
  }

  consultar(){
    this.cidade16Service.consultar().then(cidades =>{ this.cidades=cidades;});
  }

  excluir(id: number) {
    this.cidade16Service.remover(id).then(cidade =>{
      alert(`Cidade excluída com sucesso `);
      this.consultar();
    });
  }

  atualizar(cidade: any) {
    this.cidade16Service.atualizar(cidade).then(retorno => {
      alert(`Cidade ${retorno.nome} atualizada `);
    this.consultar();
  }).catch(err => {
    alert(err);
  })
  ;
  }

}
