import { TestBed } from '@angular/core/testing';

import { StfService } from './stf.service';

describe('StfService', () => {
  let service: StfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
