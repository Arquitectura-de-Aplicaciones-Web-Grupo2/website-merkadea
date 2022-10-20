import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarConsumidorComponent } from './toolbar-consumidor.component';

describe('ToolbarConsumidorComponent', () => {
  let component: ToolbarConsumidorComponent;
  let fixture: ComponentFixture<ToolbarConsumidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarConsumidorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolbarConsumidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
