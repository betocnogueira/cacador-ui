import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-grande',
  templateUrl: './botao-grande.component.html',
  styleUrls: ['./botao-grande.component.css']
})
export class BotaoGrandeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  @Input()
  label : string="Consultar";
}
