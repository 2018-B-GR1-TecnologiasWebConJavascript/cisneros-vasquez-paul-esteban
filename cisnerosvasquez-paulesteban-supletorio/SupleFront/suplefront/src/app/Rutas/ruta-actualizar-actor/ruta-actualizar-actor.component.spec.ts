import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaActualizarActorComponent } from './ruta-actualizar-actor.component';

describe('RutaActualizarActorComponent', () => {
  let component: RutaActualizarActorComponent;
  let fixture: ComponentFixture<RutaActualizarActorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaActualizarActorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaActualizarActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
