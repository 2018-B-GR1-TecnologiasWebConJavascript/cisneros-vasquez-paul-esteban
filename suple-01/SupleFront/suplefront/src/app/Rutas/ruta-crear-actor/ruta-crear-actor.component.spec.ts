import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearActorComponent } from './ruta-crear-actor.component';

describe('RutaCrearActorComponent', () => {
  let component: RutaCrearActorComponent;
  let fixture: ComponentFixture<RutaCrearActorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCrearActorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
