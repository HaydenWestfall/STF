import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoveragesSectionComponent } from './coverages-section.component';

describe('CoveragesSectionComponent', () => {
  let component: CoveragesSectionComponent;
  let fixture: ComponentFixture<CoveragesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoveragesSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoveragesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
