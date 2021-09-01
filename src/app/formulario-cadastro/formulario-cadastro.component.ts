import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


class Cliente{


    email : string="";
    nome: string="";
    profissao : string="";



}
@Component({
  selector: 'app-formulario-cadastro',
  templateUrl: './formulario-cadastro.component.html',
  styleUrls: ['./formulario-cadastro.component.css']
})
export class FormularioCadastroComponent implements OnInit {

  constructor() { }

  cliente =new Cliente();
  profissoes =["Engenheiro", "Detista", "Progamador"];
  ngOnInit(): void {
  }

  salvar(form: NgForm) {

    // this.cliente.nome=form.value.primeiroNome;
    // this.cliente.email=form.value.email;
    // this.cliente.profissao=form.value.profissao;
    if(form.valid){
      this.cliente=new Cliente();
      form.reset();
      this.cliente.profissao='';


    }
    console.log(form.value);
    console.log(this.cliente);
  }

}
