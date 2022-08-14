import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from 'src/app/service/database.service';
import { Actividad, Laboratorio, Quiz, Tema } from 'src/app/model/actividad';

@Component({
  selector: 'app-agregar-tema',
  templateUrl: './agregar-tema.component.html',
  styleUrls: ['./agregar-tema.component.css']
})
export class AgregarTemaComponent implements OnInit {

  constructor(private db: DatabaseService){}

  temas!: Tema[];
  actividades: Actividad[] = [];

  ngOnInit(): void {
    this.temas = this.db.getAllTemas();
    this.getAllActividades();
  }
  
  formActividad: FormGroup = new FormGroup({
    _id_tema: new FormControl('', [Validators.required]),
    Nombre: new FormControl('', [Validators.required]),
    TipoActividad: new FormControl('', [Validators.required]),
    TemaPrerrequisito: new FormControl('',[Validators.required]),
    Intentos: new FormControl('',[Validators.required])
  })

  getAllActividades(){
    this.actividades = [];
        this.db.getAllActs().subscribe(
          (data: any) =>{
            data.forEach((element: any) => {
              this.actividades.push({
                _id: element._id,
                _id_tema: element._id_tema,
                Nombre: element.Nombre,
                Valor: element.Valor,
                TipoActividad: element.TipoActividad,
                TemaPrerrequisito: element.TemaPrerrequisito,
                Intentos: element.Intentos
              });
            });
          }
        );
  }

  createActividad(){
    var percentage = 100;
    if(this.actividades.length > 0){
      percentage = 100 / (this.actividades.length+1);
    }
    
    // this.actividades.forEach(act =>{
    //   act.Valor = Number.parseFloat(percentage.toFixed(2));
    //   this.db.updateAct(act._id, act).subscribe({
    //     next: (res) =>{ 
    //     }
    //   });
    // });
    
    var newAct: Actividad = {
      _id_tema: this.formActividad.get('_id_tema')?.value,
      Nombre: this.formActividad.get('Nombre')?.value,
      Valor: percentage,
      TipoActividad: this.formActividad.get('TipoActividad')?.value,
      TemaPrerrequisito: this.formActividad.get('TemaPrerrequisito')?.value,
      Intentos: this.formActividad.get('Intentos')?.value
    };

    this.db.createAct(newAct).subscribe({
      next: (res) => {

        this.actividades = [];
        this.db.getAllActs().subscribe(
          (data: any) =>{
            data.forEach((element: any) => {
              this.actividades.push({
                _id: element._id,
                _id_tema: element._id_tema,
                Nombre: element.Nombre,
                Valor: element.Valor,
                TipoActividad: element.TipoActividad,
                TemaPrerrequisito: element.TemaPrerrequisito,
                Intentos: element.Intentos
              });
            });

            switch(newAct.TipoActividad){
              case "Quiz":
                this.db.createQuiz({_id: this.actividades[this.actividades.length-1]._id}).subscribe({
                  next: (res) =>{
        
                  }
                })
                break;
              case "Laboratorio":
                this.db.createLab({_id: this.actividades[this.actividades.length-1]._id}).subscribe({
                  next: (res) =>{
        
                  }
                })
                break;
            }
          }
        );

        // this.actividades.push(newAct);
        this.formActividad.reset();
      }
    });
  }

  deleteActividad(idAct: any){
    console.log(idAct);
    this.db.deleteAct(idAct).subscribe({
      next: (res) => {
        this.getAllActividades();
      }
    })
  }

}
