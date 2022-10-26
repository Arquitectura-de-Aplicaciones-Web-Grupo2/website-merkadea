import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionSectionComponent } from './election-section.component';

describe('ElectionSectionComponent', () => {
  let component: ElectionSectionComponent;
  let fixture: ComponentFixture<ElectionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectionSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
