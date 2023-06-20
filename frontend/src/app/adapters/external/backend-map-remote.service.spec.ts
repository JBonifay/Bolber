import { TestBed } from '@angular/core/testing';

import { BackendMapRemoteService } from './backend-map-remote.service';

describe('BackendMapRemoteServiceService', () => {
  let service: BackendMapRemoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendMapRemoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
