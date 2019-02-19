import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaListaFacturaComponent } from './ruta-lista-factura.component';

describe('RutaListaFacturaComponent', () => {
  let component: RutaListaFacturaComponent;
  let fixture: ComponentFixture<RutaListaFacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaListaFacturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaListaFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
