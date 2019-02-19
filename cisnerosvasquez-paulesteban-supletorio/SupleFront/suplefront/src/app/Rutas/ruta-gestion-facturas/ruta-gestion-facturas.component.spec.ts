import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaGestionFacturasComponent } from './ruta-gestion-facturas.component';

describe('RutaGestionFacturasComponent', () => {
  let component: RutaGestionFacturasComponent;
  let fixture: ComponentFixture<RutaGestionFacturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaGestionFacturasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaGestionFacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
