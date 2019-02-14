import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaActorComponent } from './ruta-actor.component';

describe('RutaActorComponent', () => {
  let component: RutaActorComponent;
  let fixture: ComponentFixture<RutaActorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaActorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
