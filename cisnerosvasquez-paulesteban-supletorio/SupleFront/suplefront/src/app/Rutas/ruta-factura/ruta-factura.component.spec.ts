import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaFacturaComponent } from './ruta-factura.component';

describe('RutaFacturaComponent', () => {
  let component: RutaFacturaComponent;
  let fixture: ComponentFixture<RutaFacturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaFacturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
