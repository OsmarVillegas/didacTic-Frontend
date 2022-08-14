import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActQUIZComponent } from './act-quiz.component';

describe('ActQUIZComponent', () => {
  let component: ActQUIZComponent;
  let fixture: ComponentFixture<ActQUIZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActQUIZComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActQUIZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
