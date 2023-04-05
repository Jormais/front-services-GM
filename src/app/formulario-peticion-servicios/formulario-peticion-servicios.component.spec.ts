import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPeticionServiciosComponent } from './formulario-peticion-servicios.component';

describe('FormularioPeticionServiciosComponent', () => {
  let component: FormularioPeticionServiciosComponent;
  let fixture: ComponentFixture<FormularioPeticionServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioPeticionServiciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioPeticionServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
