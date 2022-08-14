import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActLaboratorioComponent } from './act-laboratorio.component';

describe('ActLaboratorioComponent', () => {
  let component: ActLaboratorioComponent;
  let fixture: ComponentFixture<ActLaboratorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActLaboratorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActLaboratorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
