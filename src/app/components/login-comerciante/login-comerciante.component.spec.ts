import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComercianteComponent } from './login-comerciante.component';

describe('LoginComercianteComponent', () => {
  let component: LoginComercianteComponent;
  let fixture: ComponentFixture<LoginComercianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComercianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComercianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
