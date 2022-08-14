import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { LoginComponent } from './components/login/login.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarTemaComponent } from './components/agregar-tema/agregar-tema.component';
import { ActLaboratorioComponent } from './components/act-laboratorio/act-laboratorio.component';
import { ActQUIZComponent } from './components/act-quiz/act-quiz.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'act-laboratorio/:id',component:ActLaboratorioComponent},
  {path:'act-QUIZ/:id',component:ActQUIZComponent},
  {path:'instructor',component:InstructorComponent},
  {path:'home',component:HomeComponent},
  {path:'',component:HomeComponent},
  {path:'signup',component:LoginComponent},
  {path:'registro',component:RegistroComponent},
  {path:'agregar-tema',component:AgregarTemaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
