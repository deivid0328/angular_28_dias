import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-projectos-component',
  templateUrl: './projectos-component.component.html',
  styleUrls: ['./projectos-component.component.css']
})
export class ProjectosComponentComponent implements OnInit {

  constructor(private router:Router, private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService) { }

 

  ngOnInit(): void {
    this.empleados=this.empleadosService.empleados;

  }
  empleados:Empleado[]=[];
  agregarEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    // this.miServicio.muestraMensaje("Nombre del empleado " + miEmpleado.nombre);
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);
    this.router.navigate([""]);

  }


cuadroNombre:string="";
cuadroApellido:string="";
cuadroCargo:string="";
cuadroSalario:number=0 ;





  volverHome(){
    this.router.navigate([""]);
  }

}
