import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarHijosEventosComponent } from './agregar-hijos-eventos.component';

describe('AgregarHijosEventosComponent', () => {
  let component: AgregarHijosEventosComponent;
  let fixture: ComponentFixture<AgregarHijosEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarHijosEventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarHijosEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
