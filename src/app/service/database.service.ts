import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Actividad, Laboratorio, Pregunta, Quiz, Tema } from '../model/actividad';
const baseUrl = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  TemaList: Tema[] = [
    {_id: 1, Nombre: "Tema Ejemplo", Descripcion: "Descripción...", TemaBase: "Tema Base"}
  ]

  ActList: Actividad[] = [
    {_id: 1, _id_tema: 1, Nombre: "Nombre Actividad Ejemplo", Valor: 100, TipoActividad: "Laboratorio", TemaPrerrequisito: "Ejemplo", Intentos: 2}
  ]

  LabList: Laboratorio[] = [
    {_id: 1, file: "Ejemplo/Directorio1"},
    {_id: 2, file: "Ejemplo/Directorio2"}
  ]

  //Temas
  createTema(tema: Tema){
    this.TemaList.push(tema);
  }

  getAllTemas(): Tema[]{
    return this.TemaList;
  }

  getTema(idTema: any): Tema{
    return this.TemaList.find(tema => tema._id == idTema)!
  }

  //Actividades
  createAct(act: any): Observable<any>{
    console.log(act);
    return this.http.post(baseUrl+"actividad/", act);
  }

  getAllActs(): Observable<Actividad>{
    return this.http.get<Actividad>(baseUrl+"actividad/");
  }

  getAct(idAct: any): Actividad{
    return this.ActList.find(act => act._id == idAct)!
  }

  getAllActFromTema(idTema: any): Actividad[]{
    return this.ActList.filter(act => act._id_tema == idTema);
  }

  updateAct(idAct: any, act: Actividad): Observable<any>{
    console.log(act);
    return this.http.put(baseUrl+"actividad/"+idAct,act);
  }

  deleteAct(idAct: any): Observable<any>{
    return this.http.delete(baseUrl+"actividad/"+idAct);
  }

  //Laboratorios
  createLab(lab: Laboratorio): Observable<any>{
    return this.http.post(baseUrl+"laboratorio/", lab)
  }

  getAllLabs(): Laboratorio[]{
    return this.LabList;
  }

  getLab(idLab: any): Observable<Laboratorio>{
    return this.http.get(baseUrl+"laboratorio/"+idLab);
  }

  updateLab(idLab: any, lab: Laboratorio): Observable<any> {
    return this.http.put(baseUrl+"laboratorio/"+idLab,lab);
  }

  deleteLab(idLab: any){
    this.LabList.splice(this.LabList.indexOf(this.LabList.find(lab => lab._id == idLab)!),1)
  }

  //Quiz
  createQuiz(quiz: Quiz): Observable<any>{
    return this.http.post(baseUrl+"quiz/", quiz);
  }

  getQuiz(idQuiz: any): Observable<Quiz>{
    return this.http.get(baseUrl+"quiz/"+idQuiz);
  }

  updateQuiz(idQuiz: any, quiz: Quiz): Observable<any>{
    return this.http.put(baseUrl+"quiz/"+idQuiz,quiz);
  }

  //Pregunta
  createPregunta(pregunta: Pregunta): Observable<any>{
    return this.http.post(baseUrl+"pregunta/",pregunta);
  }

  getPregunta(idPregunta: any): Observable<any>{
    return this.http.get(baseUrl+"pregunta/"+idPregunta);
  }

  deletePregunta(idPregunta: any): Observable<any>{
    return this.http.delete(baseUrl+"pregunta/"+idPregunta);
  }

  getAllPreguntasFromQuiz(idQuiz: any): Observable<any>{
    return this.http.get(baseUrl+"pregunta/quiz/"+idQuiz);
  }

  updatePregunta(idPregunta: any, pregunta: Pregunta): Observable<any> {
    return this.http.put(baseUrl+"pregunta/"+idPregunta,pregunta);
  }
}
