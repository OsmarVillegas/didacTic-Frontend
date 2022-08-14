import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { HomeComponent } from './components/home/home.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { PiePaginaComponent } from './components/pie-pagina/pie-pagina.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NavInstructorComponent } from './components/nav-instructor/nav-instructor.component';
import { ActLaboratorioComponent } from './components/act-laboratorio/act-laboratorio.component';
import { ActQUIZComponent } from './components/act-quiz/act-quiz.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AgregarTemaComponent } from './components/agregar-tema/agregar-tema.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InstructorComponent,
    HomeComponent,
    NavegacionComponent,
    PiePaginaComponent,
    RegistroComponent,
    NavInstructorComponent,
    ActLaboratorioComponent,
    ActQUIZComponent,
    AgregarTemaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
