import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGestionEventosComponent } from './ruta-gestion-eventos.component';

describe('RutaGestionEventosComponent', () => {
  let component: RutaGestionEventosComponent;
  let fixture: ComponentFixture<RutaGestionEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGestionEventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGestionEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
