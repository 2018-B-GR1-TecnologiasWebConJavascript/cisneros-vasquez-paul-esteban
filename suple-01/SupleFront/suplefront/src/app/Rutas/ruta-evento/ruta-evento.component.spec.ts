import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEventoComponent } from './ruta-evento.component';

describe('RutaEventoComponent', () => {
  let component: RutaEventoComponent;
  let fixture: ComponentFixture<RutaEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
