import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearPeliculaComponent } from './ruta-crear-pelicula.component';

describe('RutaCrearPeliculaComponent', () => {
  let component: RutaCrearPeliculaComponent;
  let fixture: ComponentFixture<RutaCrearPeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCrearPeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
