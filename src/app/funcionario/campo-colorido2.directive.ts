import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCampoColorido2]',
  exportAs: 'campoColoridoExportado',
})
export class CampoColorido2Directive {

  @Input('novaCor')
  cor='gray';
  @HostBinding('style.backgroundColor')
  corDeFundo : string="";
  constructor() { }

  @HostListener('focus')
  colorir(){
    this.corDeFundo=this.cor;

  }


  @HostListener('blur')
  descolorir(){
    this.corDeFundo='black';

  }

}
