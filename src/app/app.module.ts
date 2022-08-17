import { DataServices } from './data.services';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';
import { EmpleadosService } from './empleados.service';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadoHijoComponent } from './empleado-hijo/empleado-hijo.component';
import { CaracteristicasEmpleadoComponent } from './caracteristicas-empleado/caracteristicas-empleado.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProjectosComponentComponent } from './projectos-component/projectos-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';
import { HttpClientModule } from '@angular/common/http'



const appRoutes:Routes=[

  {
    path:'', component: HomeComponentComponent},
    {path:'proyectos', component:ProjectosComponentComponent},
    {path:'nosotros', component:QuienesComponentComponent},
    {path:'contacto', component:ContactoComponentComponent},
    {path:'actualiza/:id',component:ActualizaComponentComponent},
    {path:'**', component:ErrorPersonalizadoComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoComponent,
    CaracteristicasEmpleadoComponent,
    HomeComponentComponent,
    ProjectosComponentComponent,
    QuienesComponentComponent,
    ContactoComponentComponent,
    ActualizaComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [ServicioEmpleadosService, EmpleadosService, DataServices],
  bootstrap: [AppComponent]

})
export class AppModule { }
