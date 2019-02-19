import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaAnadirItemComponent } from './ruta-anadir-item.component';

describe('RutaAnadirItemComponent', () => {
  let component: RutaAnadirItemComponent;
  let fixture: ComponentFixture<RutaAnadirItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaAnadirItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaAnadirItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
