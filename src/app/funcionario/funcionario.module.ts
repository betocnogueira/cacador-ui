import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionarioService } from './funcionario.service';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';
import { BotoesModule } from '../botoes/botoes.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CampoColorido2Directive } from './campo-colorido2.directive';



@NgModule({
  declarations: [FuncionarioFormComponent, FuncionarioCardComponent, CampoColorido2Directive
  ],
  exports: [FuncionarioFormComponent, FuncionarioCardComponent],
  providers: [FuncionarioService],
  imports: [
    CommonModule, BrowserModule, FormsModule
  ]
})
export class FuncionarioModule { }
