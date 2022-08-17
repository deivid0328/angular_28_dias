import { DataServices } from './data.services';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';

@Injectable({
  providedIn: 'root'
})


export class EmpleadosService {

  constructor(private servicioVentanaEmergente:ServicioEmpleadosService, private dataService:DataServices) { 

  }

  setEmpleados(misEmpleados:Empleado[]){
    this.empleados=misEmpleados;
  }

  obtenerEmpleados(){
    return this.dataService.cargarEmpleados();
  }

  empleados:Empleado[]=[];

  // empleados:Empleado[]=[

  //   new Empleado("Juan", "Diaz", "Directo", 7500), 
  //   new Empleado("Ana", "Martin", "Presidente", 6500), 
  //   new Empleado("Maria", "Fernandez", "Jefa de sección", 5500), 
  //   new Empleado("Laura", "Lopez", "Administrativo", 4500), 
    
  // ];


  agregarEmpleadoServicio(empleado:Empleado){
    this.servicioVentanaEmergente.muestraMensaje("Persona  que se va a agregar: " + "\n" + 
    empleado.nombre + "\n" + "Salario:" + empleado.salario);

    this.empleados.push(empleado);
    this.dataService.guardarEmpleados(this.empleados);

  }
  

  encontrarEmpleado(indice:number){
    let empleado:Empleado=this.empleados[indice];
    return empleado;
  }

  actualizarEmpleado(indice:number, empleado:Empleado){

    let empleadoModificado=this.empleados[indice];

    empleadoModificado.nombre=empleado.nombre;
    empleadoModificado.apellido=empleado.apellido;
    empleadoModificado.cargo=empleado.cargo;
    empleadoModificado.salario=empleado.salario;

  }


  eliminarEmpleado(indice:number){
    this.empleados.splice(indice,1);
  }


}
