import { TestBed } from '@angular/core/testing';

import { InMemoryWithDataService } from './in-memory-with-data.service';

describe('InMemoryWithDataService', () => {
  let service: InMemoryWithDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryWithDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
