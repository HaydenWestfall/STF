import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteRedirectComponent } from './quote-redirect.component';

describe('QuoteRedirectComponent', () => {
  let component: QuoteRedirectComponent;
  let fixture: ComponentFixture<QuoteRedirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteRedirectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuoteRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
