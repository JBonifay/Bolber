import {TestBed} from '@angular/core/testing';

import {InMemoryMapService} from './in-memory-map.service';
import {IMapManagement} from "../domain/ports/imap-management";

describe('InMemoryMapService', () => {
  let service: InMemoryMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: IMapManagement, useClass: InMemoryMapService}
      ],
    });
    service = TestBed.inject(IMapManagement);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
