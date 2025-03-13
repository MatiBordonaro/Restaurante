import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteContactoComponent } from './restaurante-contacto.component';

describe('RestauranteContactoComponent', () => {
  let component: RestauranteContactoComponent;
  let fixture: ComponentFixture<RestauranteContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestauranteContactoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestauranteContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
