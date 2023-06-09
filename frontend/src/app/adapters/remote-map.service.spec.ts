import {TestBed} from '@angular/core/testing';

import {RemoteMapService} from './remote-map.service';
import {InMemoryMapService} from "./in-memory-map.service";

describe('MapService', () => {
  let service: RemoteMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: RemoteMapService, useClass: InMemoryMapService}]
    });
    service = TestBed.inject(RemoteMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
