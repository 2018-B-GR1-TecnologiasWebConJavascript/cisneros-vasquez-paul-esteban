import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGestionUsuarioComponent } from './ruta-gestion-usuario.component';

describe('RutaGestionUsuarioComponent', () => {
  let component: RutaGestionUsuarioComponent;
  let fixture: ComponentFixture<RutaGestionUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGestionUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGestionUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
