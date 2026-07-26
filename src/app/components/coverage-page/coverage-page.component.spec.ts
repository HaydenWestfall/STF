import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { CoveragePageComponent } from './coverage-page.component';

describe('CoveragePageComponent', () => {
  let component: CoveragePageComponent;
  let fixture: ComponentFixture<CoveragePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [CoveragePageComponent],
      providers: [provideRouter([])],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoveragePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
