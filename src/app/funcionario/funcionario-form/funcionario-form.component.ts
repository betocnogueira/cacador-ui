import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';



@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  //styleUrls: ['./funcionario-form.component.css'],
  styles: [ `
   label {color:blue;}
   .form-control {text-transform:uppercase; color: red;}

  `]
})
export class FuncionarioFormComponent  {
  nome = 'Primeiro projeto';
  adicionado : boolean =false;
  ultimoId=0;
  @Output()
  funcionarioAdicionado = new EventEmitter();

  outraCor : string='green';

  constructor(private funcionarioService : FuncionarioService){}

  adicionar(nome : string): void{
    this.funcionarioService.adicionar(nome);
    // this.funcionarioAdicionado.emit(funcionario);
  }

}
