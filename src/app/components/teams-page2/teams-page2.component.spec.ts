import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsPage2Component } from './teams-page2.component';

describe('TeamsPage2Component', () => {
  let component: TeamsPage2Component;
  let fixture: ComponentFixture<TeamsPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsPage2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamsPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
