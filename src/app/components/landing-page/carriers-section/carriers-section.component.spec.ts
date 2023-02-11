import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarriersSectionComponent } from './carriers-section.component';

describe('CarriersSectionComponent', () => {
  let component: CarriersSectionComponent;
  let fixture: ComponentFixture<CarriersSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarriersSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarriersSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
