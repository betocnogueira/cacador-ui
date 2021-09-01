import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from './funcionario/funcionario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {



  ngOnInit(){
    this.funcionarios= this.funcionarioService.consultar();
  }

  constructor(private funcionarioService : FuncionarioService){}

  funcionarios : any[]=[];
  // alterarNome(evento : any){
  //   console.log(evento.target.value);
  //   this.nome=evento.target.value;
  // }

  // alterarNome(valorNOme : string){

  //   this.nome=valorNOme;
  // }

  // alterarNome2(valorNOme : any) : string{

  //   console.log(valorNOme);
  //   return valorNOme.target.value;
  // }



  aoAdicionar(functionario : object){
    this.funcionarios.push(functionario);

  }
}
