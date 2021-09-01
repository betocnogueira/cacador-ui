import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  styleUrls: ['./funcionario-card.component.css']
})
export class FuncionarioCardComponent  {

  @Input() 
  funcionario : any ={id: 1, nome: 'joao'};

  constructor(){}

  getEstilosCartao() : object{

    return {"backgroundColor" : this.funcionario.id%2==0 ? 'lightGray' : 'lightBlue',
            "borderWidth" : this.funcionario.id+'px'          
  };
  }

  getClassCss(){ return ['badge', 'bg-primary']};


  isAdmin(){ 
    return this.funcionario.nome.startsWith('t') ? true : false;
  }
}
