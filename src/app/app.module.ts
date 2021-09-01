import { NavegacaoModule } from './navegacao/navegacao.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { FormsModule } from '@angular/forms';
import { CampoColoridoDirective } from './campo-colorido.directive';
import { FormularioCadastroComponent } from './formulario-cadastro/formulario-cadastro.component';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { Capitulo16Component } from './capitulo16/capitulo16.component';
import { Cidade16Service } from './cidade16.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent, HelloComponent, BemVindoComponent,   CampoColoridoDirective,  FormularioCadastroComponent, Capitulo16Component
  ],
  imports: [
    BrowserModule, FormsModule, NavegacaoModule, FuncionarioModule, HttpClientModule,

  ],
  providers: [Cidade16Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
