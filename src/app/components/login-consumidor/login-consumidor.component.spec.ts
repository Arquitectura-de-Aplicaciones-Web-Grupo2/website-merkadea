import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginConsumidorComponent } from './login-consumidor.component';

describe('LoginConsumidorComponent', () => {
  let component: LoginConsumidorComponent;
  let fixture: ComponentFixture<LoginConsumidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginConsumidorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginConsumidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
