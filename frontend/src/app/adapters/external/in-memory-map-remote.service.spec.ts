import { TestBed } from '@angular/core/testing';

import { InMemoryMapRemoteService } from './in-memory-map-remote.service';

describe('InMemoryMapRemoteServiceService', () => {
  let service: InMemoryMapRemoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryMapRemoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
