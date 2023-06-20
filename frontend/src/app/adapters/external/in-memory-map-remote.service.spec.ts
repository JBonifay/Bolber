import {TestBed} from '@angular/core/testing';

import {InMemoryMapRemoteService} from './in-memory-map-remote.service';

describe('InMemoryMapRemoteService', () => {
  let service: InMemoryMapRemoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = new InMemoryMapRemoteService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
