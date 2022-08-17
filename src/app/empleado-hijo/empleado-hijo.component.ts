import { Empleado } from './../empleado.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado-hijo',
  templateUrl: './empleado-hijo.component.html',
  styleUrls: ['./empleado-hijo.component.css']
})
export class EmpleadoHijoComponent implements OnInit {

  @Input() empleado:Empleado;
  @Input() i:number;

  constructor() { }

  ngOnInit(): void {
  }

}
