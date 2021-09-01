export class FuncionarioService{

  funcionarios =[{nome: 'beto', id :1}];

  ultimoId : number =1;
  adicionar(nome:string){
    const funcionario =
      {nome: nome, id :++this.ultimoId};
      this.funcionarios.push(funcionario);

      console.log(JSON.stringify(this.funcionarios));
    }


  consultar() : object[] {

    return this.funcionarios;

  }
}
