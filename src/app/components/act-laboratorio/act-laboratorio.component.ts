import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Laboratorio } from 'src/app/model/actividad';
import { DatabaseService } from 'src/app/service/database.service';

@Component({
  selector: 'app-act-laboratorio',
  templateUrl: './act-laboratorio.component.html',
  styleUrls: ['./act-laboratorio.component.css']
})
export class ActLaboratorioComponent implements OnInit {
  constructor(private route: ActivatedRoute,
    private db: DatabaseService) { }

   lab: Laboratorio = {file: "Nada"};

  ngOnInit(): void {
    this.db.getLab(this.route.snapshot.paramMap.get('id')).subscribe(
      (data: Laboratorio) => {
        this.lab._id = data._id,
        this.lab.file = data.file
      }
    )
  }

  formLaboratorio: FormGroup = new FormGroup({
    File: new FormControl('', [Validators.required])
  })

  onFileSelected(event: any) {
    this.lab.file = event.target.files[0].name;
  }

  saveFile(): void {
    this.db.updateLab(this.lab._id,this.lab).subscribe({
      next: (res) => {

      }
    });
  }

}
