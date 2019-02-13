import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearEventoComponent } from './ruta-crear-evento.component';

describe('RutaCrearEventoComponent', () => {
  let component: RutaCrearEventoComponent;
  let fixture: ComponentFixture<RutaCrearEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCrearEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
