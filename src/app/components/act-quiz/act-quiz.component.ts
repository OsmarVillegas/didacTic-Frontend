import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Pregunta, Quiz } from 'src/app/model/actividad';
import { DatabaseService } from 'src/app/service/database.service';


@Component({
  selector: 'app-act-quiz',
  templateUrl: './act-quiz.component.html',
  styleUrls: ['./act-quiz.component.css']
})
export class ActQUIZComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private db: DatabaseService) { }

  formPregunta: FormGroup = new FormGroup({
    _id_quiz: new FormControl(''),
    Pregunta: new FormControl('', [Validators.required]),
    TipoPregunta: new FormControl('', [Validators.required]),
    Nivel: new FormControl('', [Validators.required]),
    Valor: new FormControl('', [Validators.required]),
    Respuesta: new FormControl('', [Validators.required])
  })

  quiz: Quiz = {};
  preguntas: Pregunta[] = []
  ngOnInit(): void {
    this.db.getQuiz(this.route.snapshot.paramMap.get('id')).subscribe(
      (data: Quiz) =>{
        this.quiz._id = data._id;
        this.db.getAllPreguntasFromQuiz(data._id).subscribe(
          (data: any) => {
            console.log(data)
            data.forEach((element: any) => {
              this.preguntas.push({
                _id: element._id,
                _id_quiz: element._id_quiz,
                Pregunta: element.Pregunta,
                TipoPregunta: element.TipoPregu,
                Nivel: element.Nivel,
                Valor: element.Valor,
                Respuesta: element.Respuesta
              })
            })
          }
        )
      }
    )
  }

  borrarPregunta(id: any): void{
    this.db.deletePregunta(id).subscribe({
      next: (res) =>{
        this.preguntas = [];
        this.db.getAllPreguntasFromQuiz(this.quiz._id).subscribe(
          (data: any) => {
            console.log(data)
            data.forEach((element: any) => {
              this.preguntas.push({
                _id: element._id,
                _id_quiz: element._id_quiz,
                Pregunta: element.Pregunta,
                TipoPregunta: element.TipoPregu,
                Nivel: element.Nivel,
                Valor: element.Valor,
                Respuesta: element.Respuesta
              })
            })
          }
        )
      }
    })
  }

  savePregunta(): void{
    console.log(this.quiz._id);
    this.db.createPregunta({
      _id_quiz: this.quiz._id,
      Pregunta: this.formPregunta.get('Pregunta')?.value,
      TipoPregunta: this.formPregunta.get('TipoPregunta')?.value,
      Nivel: this.formPregunta.get('Nivel')?.value,
      Valor: this.formPregunta.get('Valor')?.value,
      Respuesta: this.formPregunta.get('Respuesta')?.value
    }).subscribe({
      next: (res) =>{
        this.formPregunta.reset();
        this.preguntas = [];
        this.db.getAllPreguntasFromQuiz(this.quiz._id).subscribe(
          (data: any) => {
            console.log(data)
            data.forEach((element: any) => {
              this.preguntas.push({
                _id: element._id,
                _id_quiz: element._id_quiz,
                Pregunta: element.Pregunta,
                TipoPregunta: element.TipoPregu,
                Nivel: element.Nivel,
                Valor: element.Valor,
                Respuesta: element.Respuesta
              })
            })
          }
        )
      }
    })
  }
}
